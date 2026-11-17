"use client";;
import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    badge: "01",
    claim:
      "کلاس های آمادگی برای آزمون های بین المللی با تنوع زمانی و اساتید مجرب",
    image: "/pics/slider/exam.png",
    alt: "Exam Preparation Courses Image",
  },
  {
    id: 2,
    title: "آمادگی سفر",
    badge: "02",
    claim:
      "کلاس های آموزش زبان ویژه ی سفرهای تفریحی و کاری شما",
    image: "/pics/slider/trip.png",
    alt: "Job Language Courses Image",
  },
  {
    id: 3,
    title: "آمادگی مهاجرت",
    badge: "03",
    claim:
      "دوره های آموزش زبان های خارجه ویژه ی آمادگی برای مهاجرت",
    image: "/pics/slider/emigration.png",
    alt: "Trip & Emigration Courses Image",
  },
  {
    id: 4,
    title: "تنوع زبانی",
    badge: "04",
    claim:
      "کلاس های گروهی و خصوصی برای دوازده زبان مناسب نوجوانان و بزرگسالان",
    image: "/pics/slider/language.png",
    alt: "Language Variety Image",
  },
  {
    id: 5,
    title: "تربیت مدرس",
    badge: "05",
    claim:
      "برگزاری دوره های ویژه ی تربیت مدرس TTC و روانشناسی آموزش با تمرکز بر متدهای CLT، TBLT و CLIL",
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

const bouncySpring = {
  type: "spring",
  stiffness: 400,
  damping: 22,
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
  pauseOnHover = true,
  onItemChange
}) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isHovered, setIsHovered] = useState(false);
  const [isBrandHovered, setIsBrandHovered] = useState(false);
  const [brandPointer, setBrandPointer] = useState({ x: 50, y: 50 });
  const [progress, setProgress] = useState(0);
  const elapsedRef = React.useRef(0);

  const handleToggle = useCallback((index) => {
    setActiveIndex((prev) => {
      const next = prev === index ? null : index;
      onItemChange?.(next);
      return next;
    });
  }, [onItemChange]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      const next = prev > 0 ? prev - 1 : items.length - 1;
      onItemChange?.(next);
      return next;
    });
  }, [items.length, onItemChange]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      const next = prev < items.length - 1 ? prev + 1 : 0;
      onItemChange?.(next);
      return next;
    });
  }, [items.length, onItemChange]);

  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [activeIndex]);

  // Autoplay and its progress indicator share one timer so hovering pauses both.
  useEffect(() => {
    if (!autoPlay || activeIndex === null || (pauseOnHover && isHovered)) return;

    let lastTick = performance.now();
    const timer = setInterval(() => {
      const now = performance.now();
      elapsedRef.current += now - lastTick;
      lastTick = now;

      const nextProgress = Math.min(elapsedRef.current / autoPlayInterval, 1);
      setProgress(nextProgress * 100);

      if (nextProgress >= 1) {
        clearInterval(timer);
        elapsedRef.current = 0;
        setProgress(0);
        handleNext();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [activeIndex, autoPlay, autoPlayInterval, pauseOnHover, isHovered, handleNext]);

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
          setActiveIndex(num);
          onItemChange?.(num);
        }
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [handleNext, handlePrev, items.length, onItemChange]);

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
        {/* Left Interactive Column */}
        <div className="accordion-os-sidebar">
          {/* Accordion Items */}
          <div className="accordion-os-items-stack">
            {items.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={item.id ?? index}
                  layout="position"
                  transition={{
                    default: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                    layout: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={() => handleToggle(index)}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isOpen}
                  whileHover={{ scale: isOpen ? 1.01 : 1.03, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                  className={`accordion-os-pill ${isOpen ? "accordion-os-pill-open" : "accordion-os-pill-closed"}`}>
                  <div className="accordion-os-title-stack">
                    <motion.div
                      className="accordion-os-icon-btn"
                      animate={{
                        backgroundColor: isOpen ? "rgba(2, 2, 2, 0.9)" : "rgba(255, 255, 255, 0.8)",
                        color: isOpen ? "#ffffff" : "rgb(2, 2, 2)",
                        borderColor: isOpen ? "rgba(0, 0, 0, 0.8)" : "rgba(2, 2, 2, 0.2)",
                      }}
                      whileHover={{ scale: 1.15, rotate: isOpen ? -45 : 90 }}
                      whileTap={{ scale: 0.9 }}
                      transition={bouncySpring}>
                      <motion.svg
                        viewBox="0 0 24 24"
                        className="accordion-os-svg-icon"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={bouncySpring}>
                        <path
                          d="m6 9 6 6 6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round" />
                      </motion.svg>
                    </motion.div>

                    <div className="accordion-os-title-wrapper">
                      <span className="accordion-os-title-text">{item.title}</span>
                      {isOpen && item.badge ? (
                        <span className="accordion-os-pill-badge accordion-os-pill-badge-active">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="claim-content"
                        initial={{ opacity: 0, height: 0, marginTop: 0, filter: "blur(4px)" }}
                        animate={{
                          opacity: 1,
                          height: "auto",
                          marginTop: 12,
                          filter: "blur(0px)",
                          transition: {
                            height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                            filter: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          marginTop: 0,
                          filter: "blur(4px)",
                          transition: {
                            height: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                            opacity: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                          },
                        }}
                        className="accordion-os-claim-container">
                        <motion.p
                          initial={{ y: 8 }}
                          animate={{ y: 0 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="accordion-os-claim-text">
                          {item.claim}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isOpen && (
                    <div aria-hidden className="accordion-os-progress-track">
                      <motion.div
                        style={{ transform: `scaleX(${progress / 100})` }}
                        className="accordion-os-progress-fill"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Floating Navigation Deck */}
          <div className="accordion-os-bottom-deck">
            <AnimatePresence>
              {activeIndex !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 15, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 15, scale: 0.9 }}
                  transition={bouncySpring}
                  className="accordion-os-nav-stack">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous (Up Arrow)"
                    className="accordion-os-nav-btn">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="accordion-os-nav-svg">
                      <polyline points="18 15 12 9 6 15" />
                    </svg>
                  </button>

                  <div className="accordion-os-counter">
                    <span>{String((activeIndex ?? 0) + 1).padStart(2, "0")}</span>
                    <span className="accordion-os-counter-divider">/</span>
                    <span>{String(items.length).padStart(2, "0")}</span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next (Down Arrow)"
                    className="accordion-os-nav-btn">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="accordion-os-nav-svg">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Persistent Pre-Decoded Instant GPU Layers */}
        <div className="accordion-os-visual-wrapper">
          {/* Static Default Image */}
          <motion.div
            className="accordion-os-image-layer"
            initial={false}
            animate={{
              opacity: activeIndex === null ? 1 : 0,
              scale: activeIndex === null ? 1 : 1.05,
              zIndex: activeIndex === null ? 2 : 1,
            }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
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
                  zIndex: isActive ? 3 : 1,
                }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}>
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="accordion-os-image"
                  loading="eager"
                  decoding="async" />
              </motion.div>
            );
          })}

          <div className="accordion-os-slide-dots" role="group" aria-label="Choose slide">
            {items.map((item, index) => (
              <button
                key={item.id ?? index}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => {
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

          .accordion-os-slide-dots {
            position: absolute;
            z-index: 6;
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
