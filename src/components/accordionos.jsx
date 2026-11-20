"use client";;
import React, { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TextHoverEffect } from "@/components/velora/text-hover-effect";

// ==========================================
// 1. HYDRATION-SAFE TOOLTIP COMPONENTS
// ==========================================

export function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return (<TooltipPrimitive.Provider data-slot="tooltip-provider" delayDuration={delayDuration} {...props} />);
}

export function Tooltip({
  ...props
}) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
}

export function TooltipTrigger({
  ...props
}) {
  return (<TooltipPrimitive.Trigger data-slot="tooltip-trigger" suppressHydrationWarning {...props} />);
}

export function TooltipContent({
  className = "",
  overlayText = null,
  sideOffset = 4,
  children,
  ...props
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={`z-50 overflow-hidden rounded-md bg-neutral-900 px-3 py-1.5 text-xs text-neutral-50 shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 ${className}`}
        {...props}>
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export function ActionButton({
  label,
  active = false,
  disabled = false,
  onClick,
  icon,
  children
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        disabled={disabled}
        suppressHydrationWarning
        className="inline-flex size-9 items-center justify-center rounded-lg border-0 bg-transparent text-neutral-600 dark:text-neutral-300 disabled:opacity-40">
        {icon || children}
      </button>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild suppressHydrationWarning>
        <button
          type="button"
          disabled={disabled}
          onClick={onClick}
          aria-label={label}
          aria-pressed={active}
          suppressHydrationWarning
          className={`inline-flex size-9 items-center justify-center rounded-lg border-0 transition-colors ${
            active
              ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
              : "bg-transparent text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          } disabled:pointer-events-none disabled:opacity-40`}>
          {icon || children}
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
}

const DEFAULT_ITEMS = [
  {
    id: 1,
    title: "آمادگی آزمون",
    href: "/slider/exam-preparation",
    badge: "01",
    claim:
      "کلاس های آمادگی برای تمامی آزمون های بین المللی",
    image: "/pics/slider/exam.png",
    alt: "Exam Preparation Courses Image",
  },
  {
    id: 2,
    title: "آمادگی سفر",
    href: "/slider/travel-preparation",
    badge: "02",
    claim:
      "کلاس های آموزش زبان ویژه ی سفرهای تفریحی و کاری",
    image: "/pics/slider/trip.png",
    alt: "Job Language Courses Image",
  },
  {
    id: 3,
    title: "آمادگی مهاجرت",
    href: "/slider/immigration-preparation",
    badge: "03",
    claim:
      "دوره های آموزش زبان ویژه ی آمادگی برای مهاجرت",
    image: "/pics/slider/emigration.png",
    alt: "Trip & Emigration Courses Image",
  },
  {
    id: 4,
    title: "تنوع زبانی",
    href: "/slider/language-variety",
    badge: "04",
    claim:
      "کلاس های گروهی و خصوصی برای نوجوانان و بزرگسالان",
    image: "/pics/slider/language.png",
    alt: "Language Variety Image",
  },
  {
    id: 5,
    title: "تربیت مدرس",
    href: "/slider/teacher-training",
    badge: "05",
    claim:
      "دوره های تربیت مدرس و آموزش روانشناسی آموزش",
    image: "/pics/slider/ttc.jpg",
    alt: "TTC Course Image",
  },
];

const DEFAULT_STATIC_IMAGE = "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=80";

const springPhysics = {
  type: "spring",
  stiffness: 340,
  damping: 28,
  mass: 0.8,
};

export function AccordionOS({
  items = DEFAULT_ITEMS,
  staticImage = DEFAULT_STATIC_IMAGE,
  defaultActiveIndex = 0,
  className = "",
  overlayText = null,
  containerHeight = 500,
  containerWidth = 1200,
  autoPlay = true,
  autoPlayInterval = 3500,
  onItemChange
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [brandPointer, setBrandPointer] = useState({ x: 50, y: 50 });
  const elapsedRef = React.useRef(0);

  const handlePrev = useCallback(() => {
    setSlideDirection(-1);
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      const next = prev > 0 ? prev - 1 : items.length - 1;
      onItemChange?.(next);
      return next;
    });
  }, [items.length, onItemChange]);

  const handleNext = useCallback(() => {
    setSlideDirection(1);
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      const next = prev < items.length - 1 ? prev + 1 : 0;
      onItemChange?.(next);
      return next;
    });
  }, [items.length, onItemChange]);

  useEffect(() => {
    elapsedRef.current = 0;
  }, [activeIndex]);

  // Autoplay pauses while the slide content is hovered.
  useEffect(() => {
    if (!autoPlay || activeIndex === null) return;

    let lastTick = performance.now();
    const timer = setInterval(() => {
      const now = performance.now();
      elapsedRef.current += now - lastTick;
      lastTick = now;

      const nextProgress = Math.min(elapsedRef.current / autoPlayInterval, 1);
      if (nextProgress >= 1) {
        clearInterval(timer);
        elapsedRef.current = 0;
        handleNext();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeIndex, autoPlay, autoPlayInterval, handleNext]);

  // Global Keyboard Navigation (ArrowUp, ArrowDown, W/S, 1-5, Escape)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      const tag = (e.target)?.tagName?.toLowerCase();
      if (tag === "input" || tag === "textarea" || (e.target)?.isContentEditable) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key.toLowerCase() === "s") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key.toLowerCase() === "w") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Escape") {
        e.preventDefault();
        setActiveIndex(null);
        onItemChange?.(null);
      } else if (["1", "2", "3", "4", "5"].includes(e.key)) {
        const num = parseInt(e.key, 10) - 1;
        if (num < items.length) {
          e.preventDefault();
          setSlideDirection(num >= (activeIndex ?? 0) ? 1 : -1);
          setActiveIndex(num);
          onItemChange?.(num);
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [activeIndex, handleNext, handlePrev, items.length, onItemChange]);

  const linkedSlide = items[activeIndex ?? 0] || items[0];

  return (
    <div
      dir="rtl"
      className={`accordion-os-root ${className}`}
      style={{
        width: typeof containerWidth === "number" ? `${containerWidth}px` : containerWidth,
        height: typeof containerHeight === "number" ? `${containerHeight}px` : containerHeight,
        maxWidth: "100%",
      }}>
      <motion.div
        className="accordion-os-card"
        style={{
          height: typeof containerHeight === "number" ? `${containerHeight}px` : containerHeight,
        }}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        {/* Persistent Pre-Decoded Instant GPU Layers */}
        <div className="accordion-os-visual-wrapper">
          {/* Static Default Image */}
          <motion.div
            className="accordion-os-image-layer"
            initial={false}
            animate={{
              opacity: activeIndex === null ? 1 : 0,
              scale: activeIndex === null ? 1 : 1.05,
              x: activeIndex === null ? 0 : slideDirection > 0 ? -24 : 24,
              zIndex: activeIndex === null ? 2 : 1,
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <img
              src={staticImage}
              alt="Handmade ceramic vessels on a studio shelf"
              className="accordion-os-image"
              loading="eager"
              decoding="async" />
          </motion.div>

          {/* 5 Slide Images */}
          {items.map((item, idx) => {
            const isActive = activeIndex === idx;
            return (
              <motion.div
                key={item.id ?? idx}
                className="accordion-os-image-layer"
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 1.05,
                  x: isActive ? 0 : slideDirection > 0 ? -24 : 24,
                  zIndex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="accordion-os-image"
                  loading="eager"
                  decoding="async" />
              </motion.div>
            );
          })}

          {linkedSlide && (
            <a
              href={linkedSlide.href || "#special-courses"}
              className="accordion-os-image-link"
              aria-label={`${linkedSlide.title}${linkedSlide.claim ? `. ${linkedSlide.claim}` : ""}`}
            >
              <span className="sr-only">{linkedSlide.title}{linkedSlide.claim ? `: ${linkedSlide.claim}` : ""}</span>
            </a>
          )}

          <button type="button" className="accordion-os-side-arrow accordion-os-side-arrow-left" onClick={handlePrev} aria-label="Previous slide">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <button type="button" className="accordion-os-side-arrow accordion-os-side-arrow-right" onClick={handleNext} aria-label="Next slide">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>

          <div className="accordion-os-slide-dots" role="group" aria-label="Choose slide">
            {items.map((item, index) => (
              <button
                key={item.id ?? index}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => {
                  setSlideDirection(index >= (activeIndex ?? 0) ? 1 : -1);
                  setActiveIndex(index);
                  onItemChange?.(index);
                }}
                className={`accordion-os-slide-dot${activeIndex === index ? " accordion-os-slide-dot-active" : ""}`}
              />
            ))}
          </div>

          {overlayText && (
            <div
              className="accordion-os-overlay-text"
              onPointerEnter={() => setIsBrandHovered(true)}
              onPointerLeave={() => setIsBrandHovered(false)}
              onPointerMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                setBrandPointer({
                  x: ((event.clientX - bounds.left) / bounds.width) * 100,
                  y: ((event.clientY - bounds.top) / bounds.height) * 100,
                });
              }}
            >
              <TextHoverEffect
                text={overlayText}
                active={isBrandHovered}
                pointerPosition={brandPointer}
                drawDuration={4}
                className="[--foreground:white]"
              />
            </div>
          )}

        </div>
      </motion.div>
      {/* Embedded Component Styles */}
      <style
        dangerouslySetInnerHTML={{ __html: `
          .accordion-os-root {
            box-sizing: border-box;
            margin: 0 auto;
            font-family: var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif;
            user-select: none;
            perspective: 1200px;
            container-type: inline-size;
            overflow-anchor: none;
          }

          .accordion-os-card {
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            background-color: #f6f6f8;
            border-radius: 36px;
            padding: 24px;
            overflow: hidden;
            width: 100%;
            box-sizing: border-box;
          }

          .accordion-os-sidebar {
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            width: 290px;
            height: 100%;
            flex-shrink: 0;
            pointer-events: auto;
          }

          .accordion-os-items-stack {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
            width: 100%;
            z-index: 10;
          }

          .accordion-os-pill {
            position: relative;
            width: 180px;
            max-width: 290px;
            overflow: hidden;
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            background-color: rgba(245, 245, 247, 0.72);
            border-radius: 22px;
            padding: 16px 22px;
            cursor: pointer;
            border: 1px solid rgba(255, 255, 255, 0.7);
            transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease, border-color 0.25s ease;
            outline: none;
            box-sizing: border-box;
          }

          .accordion-os-pill:hover {
            border-color: rgba(0, 0, 0, 0.12);
            background-color: rgba(255, 255, 255, 0.92);
          }

          .accordion-os-pill:focus-visible {
            box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.4);
          }

          .accordion-os-pill-open {
            width: 290px;
            background-color: rgba(255, 255, 255, 0.9);
            border-color: rgba(0, 0, 0, 0.1);
          }

          .accordion-os-title-stack {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
          }

          .accordion-os-icon-btn {
            width: 22px;
            height: 22px;
            border-radius: 9999px;
            border: 1.5px solid rgba(2, 2, 2, 0.3);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            color: rgb(2, 2, 2);
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.04);
          }

          .accordion-os-svg-icon {
            width: 13px;
            height: 13px;
          }

          .accordion-os-title-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            gap: 8px;
          }

          .accordion-os-title-text {
            font-family: var(--vazirb), sans-serif;
            font-size: 15px;
            font-weight: 600;
            color: #111111;
            letter-spacing: -0.015em;
            white-space: nowrap;
            direction: rtl;
            text-align: right;
          }

          .accordion-os-pill-badge {
            font-size: 10px;
            font-weight: 700;
            color: rgba(0, 0, 0, 0.35);
            font-variant-numeric: tabular-nums;
          }

          .accordion-os-pill-badge-active {
            color: rgba(0, 0, 0, 0.75);
          }

          .accordion-os-claim-container {
            position: relative;
            z-index: 1;
            overflow: hidden;
            width: 252px;
          }

          .accordion-os-claim-text {
            font-family: var(--vazirt), sans-serif;
            margin: 0;
            font-size: 15px;
            line-height: 1.5;
            color: #4b5563;
            word-break: break-word;
            direction: rtl;
            text-align: right;
          }

          .accordion-os-progress-track {
            position: absolute;
            inset: 0;
            z-index: 0;
            overflow: hidden;
            border-radius: inherit;
            pointer-events: none;
          }

          .accordion-os-progress-fill {
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255);
            transform-origin: right center;
          }

          .accordion-os-bottom-deck {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            z-index: 10;
            margin-top: auto;
            padding-top: 18px;
          }

          .accordion-os-nav-stack {
            display: flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.65);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 4px;
            border-radius: 100px;
            border: 1px solid rgba(0, 0, 0, 0.05);
          }

          .accordion-os-nav-btn {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            flex-shrink: 0;
            width: 26px;
            height: 26px;
            border-radius: 9999px;
            background-color: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #1f2937;
            border: 1px solid rgba(0, 0, 0, 0.06);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
          }

          .accordion-os-nav-svg {
            width: 13px;
            height: 13px;
            display: block;
          }

          .accordion-os-counter {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 26px;
            gap: 4px;
            font-size: 11px;
            font-weight: 600;
            line-height: 1;
            color: #374151;
            font-variant-numeric: tabular-nums;
          }

          .accordion-os-counter-divider {
            opacity: 0.4;
          }

          .accordion-os-visual-wrapper {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .accordion-os-image-layer {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            will-change: opacity, transform;
          }

          .accordion-os-image-link {
            position: absolute;
            inset: 0;
            z-index: 5;
            pointer-events: auto;
            cursor: pointer;
          }

          .accordion-os-side-arrow {
            position: absolute;
            top: 50%;
            z-index: 7;
            display: grid;
            width: 44px;
            height: 44px;
            place-items: center;
            padding: 0;
            border: 1px solid rgba(255,255,255,.7);
            border-radius: 999px;
            background: rgba(0,0,0,.25);
            color: #fff;
            pointer-events: auto;
            cursor: pointer;
            transform: translateY(-50%);
            transition: background-color 180ms ease, transform 180ms ease;
          }

          .accordion-os-side-arrow:hover {
            background: rgba(0,0,0,.5);
            transform: translateY(-50%) scale(1.06);
          }

          .accordion-os-side-arrow svg {
            width: 22px;
            height: 22px;
            fill: none;
            stroke: currentColor;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .accordion-os-side-arrow-left { left: 48px; }
          .accordion-os-side-arrow-right { right: 48px; }

          .accordion-os-side-arrow:focus-visible,
          .accordion-os-image-link:focus-visible {
            outline: 2px solid #fff;
            outline-offset: 3px;
          }

          .accordion-os-slide-copy {
            position: absolute;
            z-index: 6;
            right: 48px;
            bottom: 24px;
            width: min(440px, calc(100% - 40px));
            min-height: 150px;
            overflow: hidden;
            direction: rtl;
            text-align: right;
            pointer-events: auto;
            border: 1px solid transparent;
            border-radius: 24px;
            background: rgba(0, 0, 0, 0.5);
            box-shadow: none;
            display: flex;
            flex-direction: column;
            padding: 12px;
          }

          .accordion-os-slide-copy::before {
            content: "";
            position: absolute;
            z-index: 0;
            inset: 0 0 0 auto;
            width: var(--slide-progress, 0%);
            border-radius: inherit;
            background: rgba(0, 0, 0, 0.2);
            pointer-events: none;
          }

          .accordion-os-slide-copy-inner {
            position: relative;
            z-index: 1;
            display: flex;
            flex: 1;
            min-height: 0;
            flex-direction: column;
            justify-content: center;
            padding: 16px 8px;
            text-align: right;
          }

          .accordion-os-slide-title {
            margin: 0 0 8px;
            color: #fff;
            font-family: var(--vazirb), sans-serif;
            font-size: clamp(24px, 3vw, 36px);
            font-weight: 700;
            line-height: 1.3;
          }

          .accordion-os-slide-claim {
            margin: 0;
            color: #fff;
            font-family: var(--vazirt), sans-serif;
            font-size: clamp(16px, 1.7vw, 20px);
            line-height: 1.8;
          }

          .accordion-os-slide-cta {
            align-self: stretch;
            flex-shrink: 0;
            width: 100%;
            box-sizing: border-box;
            margin-top: 0;
            padding: 9px 18px;
            border: 1px solid #fff;
            border-radius: 999px;
            background: #fff;
            color: #000;
            font-family: var(--vazirt), sans-serif;
            font-size: 14px;
            line-height: 1.4;
            text-align: center;
            text-decoration: none;
            transition: background-color 180ms ease, color 180ms ease;
          }

          .accordion-os-slide-cta:hover {
            background: rgba(255, 255, 255, 0.9);
            color: #000;
          }

          .accordion-os-slide-cta:focus-visible {
            outline: 2px solid #000;
            outline-offset: 3px;
          }

          .accordion-os-slide-dots {
            position: absolute;
            z-index: 12;
            left: 50%;
            bottom: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transform: translateX(-50%);
            pointer-events: auto;
          }

          .accordion-os-slide-dot {
            width: 7px;
            height: 7px;
            padding: 0;
            border: 0;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.55);
            pointer-events: auto;
            cursor: pointer;
            transition: background-color 180ms ease, transform 180ms ease;
          }

          .accordion-os-slide-dot:hover {
            transform: scale(1.2);
          }

          .accordion-os-slide-dot-active {
            background: #fff;
          }

          .accordion-os-slide-dot:focus-visible {
            outline: 2px solid #fff;
            outline-offset: 3px;
          }

          .accordion-os-overlay-text {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: 5;
            width: min(64vw, 760px);
            transform: translate(-50%, -50%);
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            --brand-from: #fff;
            --brand-via: #fff;
            --brand-to: #fff;
          }

          .accordion-os-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            border-radius: 36px;
            display: block;
          }

          @container (max-width: 640px) {
            .accordion-os-card {
              flex-direction: column;
              justify-content: flex-start;
              height: auto !important;
              min-height: 100dvh;
              padding: 14px;
              border-radius: 24px;
            }

            .accordion-os-sidebar {
              width: 100%;
              height: auto;
            }

            .accordion-os-pill {
              max-width: 100%;
              padding: 14px 16px;
              border-radius: 18px;
            }

            .accordion-os-pill-open {
              width: 100%;
              max-width: 100%;
            }

            .accordion-os-claim-container {
              width: 100%;
            }

            .accordion-os-title-text {
              font-size: 14px;
              white-space: normal;
            }

            .accordion-os-bottom-deck {
              margin-top: 18px;
              margin-bottom: 12px;
            }

            .accordion-os-image {
              border-radius: 24px;
            }

            .accordion-os-slide-copy {
              right: 12px;
              bottom: 12px;
              width: calc(100% - 24px);
            }
          }

          @container (max-width: 420px) {
            .accordion-os-card {
              padding: 10px;
              border-radius: 20px;
              min-height: 100dvh;
            }

            .accordion-os-items-stack {
              gap: 8px;
            }

            .accordion-os-image {
              border-radius: 20px;
            }

            .accordion-os-slide-copy {
              right: 12px;
              bottom: 12px;
              width: calc(100% - 24px);
            }
          }

          .accordion-os-fullscreen .accordion-os-card {
            height: 83.333svh !important;
            min-height: 83.333svh;
            flex: none;
            contain: size layout;
            overflow-anchor: none;
            padding: 0;
            border-radius: 0;
          }

          .accordion-os-fullscreen .accordion-os-slide-copy {
            top: 50%;
            right: 48px;
            bottom: auto;
            width: min(250px, calc(100% - 64px));
            height: auto;
            min-height: 0;
            aspect-ratio: 1;
            translate: 0 -50%;
          }

          .accordion-os-fullscreen .accordion-os-slide-copy-inner {
            min-height: 0;
            justify-content: center;
          }

          .accordion-os-fullscreen .accordion-os-sidebar {
            position: absolute;
            top: auto;
            right: 45px;
            left: auto;
            bottom: 24px;
            width: 290px;
            height: auto;
            box-sizing: border-box;
            align-items: flex-start;
            padding: 0;
            transform: none;
          }

          .accordion-os-fullscreen .accordion-os-items-stack {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            width: 100%;
            max-width: 100%;
            box-sizing: border-box;
            gap: 10px;
            padding: 0;
            overflow: visible;
          }

          .accordion-os-fullscreen .accordion-os-pill {
            flex: 0 0 auto;
            width: clamp(100px, 14vw, 180px);
          }

          .accordion-os-fullscreen .accordion-os-pill-open {
            width: 290px;
            padding-bottom: 16px;
          }

          .accordion-os-fullscreen .accordion-os-pill-open .accordion-os-claim-container {
            width: 244px;
          }

          .accordion-os-fullscreen .accordion-os-bottom-deck {
            display: none;
          }

          .accordion-os-fullscreen .accordion-os-image {
            border-radius: 0;
          }

          @container (max-width: 640px) {
            .accordion-os-fullscreen .accordion-os-sidebar {
              top: auto;
              right: 20px;
              bottom: 12px;
              width: min(290px, calc(100% - 24px));
              padding: 0;
            }

            .accordion-os-overlay-text {
              width: min(72vw, 520px);
            }

            .accordion-os-fullscreen .accordion-os-items-stack {
              align-items: flex-start;
              gap: 8px;
              max-height: 80svh;
              overflow-y: auto;
              overflow-x: visible;
            }

            .accordion-os-fullscreen .accordion-os-pill {
              width: min(180px, 100%);
              padding: 14px 16px;
            }

            .accordion-os-fullscreen .accordion-os-pill-open {
              width: min(260px, 100%);
              padding-bottom: 14px;
            }

            .accordion-os-fullscreen .accordion-os-pill-open .accordion-os-claim-container {
              width: min(226px, calc(100vw - 56px));
            }
          }

          @container (max-width: 420px) {
            .accordion-os-fullscreen .accordion-os-sidebar {
              bottom: 8px;
            }
          }
        ` }} />
    </div>
  );
}

// ==========================================
// 4. MAIN PAGE / APP EXPORT
// ==========================================

export default function Page() {
  return (
    <TooltipProvider delayDuration={0}>
      <div
        className="flex h-full w-full min-w-0 items-center justify-center overflow-auto p-4">
        <AccordionOS
          containerWidth="min(52.5rem, 100%)"
          containerHeight={520}
          autoPlay
          autoPlayInterval={3500}
          pauseOnHover />
      </div>
    </TooltipProvider>
  );
}
