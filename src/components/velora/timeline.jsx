"use client";;
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Vertical timeline: each entry's label sticks beside its content while a
 * gradient beam fills the track as you scroll. Sticky offsets use `cqh`, so
 * inside a `@container-size` scroll box they measure that box instead of the
 * viewport. Under `prefers-reduced-motion` the beam is drawn in full.
 */
export function Timeline({
  items,
  container,
  className,
  ...props
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container,
    target: ref,
    offset: ["start 0.7", "end 0.7"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 300, damping: 40 });
  const top = useTransform(progress, (v) => `${v * 100}%`);

  return (
    <div
      ref={ref}
      data-slot="timeline"
      className={cn("relative @container/timeline", className)}
      {...props}>
      <div aria-hidden className="absolute inset-y-0 right-3 w-0.5 translate-x-1/2">
        <div
          className="absolute inset-0 bg-white/20 [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]">
          <motion.div
            style={{ scaleY: progress }}
            className="absolute inset-0 origin-top bg-gradient-to-b from-transparent via-[#ff0084] via-15% to-[#ff0084] motion-reduce:transform-none!" />
        </div>
        <motion.div
          style={{ top }}
          className="absolute left-1/2 size-2 -translate-1/2 rounded-full bg-[#ff0084] shadow-[0_0_5px_2px_rgba(255,0,132,1),0_0_16px_7px_rgba(255,0,132,0.75),0_0_30px_12px_rgba(255,0,132,0.4)] motion-reduce:hidden" />
      </div>
      <ol className="relative flex flex-col gap-14 @xl/timeline:gap-24">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex flex-col gap-4 @xl/timeline:flex-row @xl/timeline:gap-10">
            <div
              className="flex items-center gap-4 self-start @xl/timeline:sticky @xl/timeline:top-[16cqh] @xl/timeline:w-48 @xl/timeline:shrink-0">
              <span
                aria-hidden
                className="relative flex size-6 shrink-0 items-center justify-center rounded-full border border-white/40 bg-black shadow-sm">
                <span
                  className="size-2 rounded-full bg-gradient-to-br from-[#ff0084] to-[#ff80c2] shadow-[0_0_8px_2px_rgba(255,0,132,0.5)]" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight @xl/timeline:text-2xl">
                {item.title}
              </h3>
            </div>
            <div className="min-w-0 flex-1 pl-10 @xl/timeline:pl-0">
              {item.content}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
