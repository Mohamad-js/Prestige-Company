"use client";;
import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  decimalPlaces = 0,
  locale = "en-US",
  prefix = "",
  suffix = "",
  className,
  ...props
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();

  const format = (n) =>
    `${prefix}${Intl.NumberFormat(locale, {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(n)}${suffix}`;

  useEffect(() => {
    if (!isInView) return;
    if (reducedMotion) {
      // jump() on the source alone still makes the spring follow it,
      // so jump the spring too to skip the count-up entirely
      motionValue.jump(value);
      springValue.jump(value);
      return;
    }
    const timeout = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, reducedMotion, motionValue, springValue, value, delay]);

  useEffect(() =>
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = format(latest);
    }), // eslint-disable-next-line react-hooks/exhaustive-deps
  [springValue, prefix, suffix, decimalPlaces, locale]);

  return (
    <span
      data-slot="number-ticker"
      className={cn("inline-block tabular-nums", className)}
      {...props}>
      <span className="sr-only">{format(value)}</span>
      <span
        ref={ref}
        aria-hidden
        className={cn("inline-block", className)}
        style={{ fontFamily: "var(--vazirt)" }}>
        {format(startValue)}
      </span>
    </span>
  );
}
