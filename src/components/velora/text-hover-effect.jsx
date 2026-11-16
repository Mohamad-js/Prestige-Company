"use client";;
import { useEffect, useId, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

const PAD = 4;

/**
 * Oversized outlined text that draws itself in, then reveals a brand-gradient
 * version of the word inside a soft spotlight that follows the pointer.
 * Size it with a width class (`w-full`); the height follows the text. Weight
 * and font come from the className, e.g. `font-black`.
 */
export function TextHoverEffect({
  text,
  strokeWidth = 0.75,
  revealRadius = 28,
  drawDuration = 3,
  active = false,
  pointerPosition = null,
  className,
  onPointerMove,
  ...props
}) {
  const id = useId();
  const outlineRef = useRef(null);
  const reducedMotion = useReducedMotion();
  // A rough first guess so the server render has sensible proportions; the
  // real glyph box is measured once the font has loaded.
  const [box, setBox] = useState({ w: text.length * 64 + PAD * 2, h: 80, x: PAD, y: 76 });

  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const spring = { stiffness: 260, damping: 32, mass: 0.6 };
  const cx = useMotionTemplate`${useSpring(px, spring)}%`;
  const cy = useMotionTemplate`${useSpring(py, spring)}%`;

  useEffect(() => {
    if (!pointerPosition) return;
    px.set(pointerPosition.x);
    py.set(pointerPosition.y);
  }, [pointerPosition, px, py]);

  useEffect(() => {
    let live = true;
    document.fonts.ready.then(() => {
      const el = outlineRef.current;
      if (!live || !el) return;
      // Width from the layout box; height from the glyphs' actual ink, so
      // caps-only words aren't padded out by empty descender space.
      const bb = el.getBBox();
      const css = getComputedStyle(el);
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.font = `${css.fontStyle} ${css.fontWeight} 100px ${css.fontFamily}`;
      const ink = ctx.measureText(text);
      const top = ink.actualBoundingBoxAscent;
      setBox({
        w: bb.width + PAD * 2,
        h: top + ink.actualBoundingBoxDescent + PAD * 2,
        x: PAD - bb.x,
        y: PAD + top,
      });
    });
    return () => {
      live = false;
    };
  }, [text]);

  // Draw-in: the CSS starts the dash fully offset (motion-safe only); reading
  // the computed style commits that state before we transition to zero.
  useEffect(() => {
    const el = outlineRef.current;
    if (!el) return;
    void getComputedStyle(el).strokeDashoffset;
    el.style.strokeDashoffset = "0";
    const fadeTimer = window.setTimeout(() => {
      el.style.strokeDasharray = "none";
      el.style.transition = "stroke-opacity 250ms ease-out";
      requestAnimationFrame(() => {
        el.style.strokeOpacity = "0.16";
      });
    // The SVG's long dash length leaves a visually idle tail in the offset
    // transition. Start the pale fade at the visible end of the draw.
    }, reducedMotion ? 0 : Math.max(0, drawDuration * 1000 - 1000));

    return () => window.clearTimeout(fadeTimer);
  }, [drawDuration, reducedMotion]);

  const frame = {
    maskUnits: "userSpaceOnUse",
    x: 0,
    y: 0,
    width: "100%",
    height: "100%"
  };
  const word = (attrs) => (
    <text transform={`translate(${box.x} ${box.y})`} fontSize={100} {...attrs}>
      {text}
    </text>
  );

  return (
    <svg
      role="img"
      aria-label={text}
      viewBox={`0 0 ${box.w} ${box.h}`}
      data-slot="text-hover-effect"
      className={cn("group/text-hover h-auto w-full select-none font-bold", className)}
      onPointerMove={(event) => {
        onPointerMove?.(event);
        if (reducedMotion || pointerPosition) return;
        const rect = event.currentTarget.getBoundingClientRect();
        px.set(((event.clientX - rect.left) / rect.width) * 100);
        py.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
      {...props}>
      <defs>
        <linearGradient id={`${id}-ink`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" style={{ stopColor: "var(--brand-from)" }} />
          <stop offset="50%" style={{ stopColor: "var(--brand-via)" }} />
          <stop offset="100%" style={{ stopColor: "var(--brand-to)" }} />
        </linearGradient>
        <motion.radialGradient
          id={`${id}-spot`}
          gradientUnits="userSpaceOnUse"
          cx={cx}
          cy={cy}
          r={`${revealRadius}%`}>
          <stop offset="0%" stopColor="white" />
          <stop offset="55%" stopColor="white" stopOpacity={0.55} />
          <stop offset="100%" stopColor="white" stopOpacity={0} />
        </motion.radialGradient>
        <mask id={`${id}-spot-mask`} {...frame}>
          <rect width="100%" height="100%" fill={`url(#${id}-spot)`} />
        </mask>
        {/* Hides everything inside the glyphs, so variable fonts' overlapping
            contours never show through the outline. */}
        <mask id={`${id}-outside`} {...frame}>
          <rect width="100%" height="100%" fill="white" />
          {word({ fill: "black" })}
        </mask>
      </defs>
      <g mask={`url(#${id}-outside)`}>
        {word({
          ref: outlineRef,
          strokeWidth: strokeWidth * 2,
          strokeOpacity: 0.9,
          style: {
            transitionProperty: "stroke-dashoffset",
            transitionDuration: `${drawDuration}s`,
          },
          className:
            "fill-none stroke-foreground transition-[stroke-dashoffset,stroke-opacity] ease-linear [stroke-dasharray:1000] motion-safe:[stroke-dashoffset:1000] motion-reduce:transition-none",
        })}
      </g>
      <g
        mask={`url(#${id}-spot-mask)`}
        className={cn(
          "transition-opacity duration-500 motion-reduce:duration-150",
          active ? "opacity-100" : "opacity-0 group-hover/text-hover:opacity-100",
        )}>
        {word({ fill: `url(#${id}-ink)`, fillOpacity: 0.7 })}
        <g mask={`url(#${id}-outside)`}>
          {word({ fill: "none", stroke: `url(#${id}-ink)`, strokeWidth: strokeWidth * 4 })}
        </g>
      </g>
    </svg>
  );
}
