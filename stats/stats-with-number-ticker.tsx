"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

export function StatsWithNumberTicker() {
  const items = [
    {
      description: "Branches opened since we started our expansion journey.",
      value: 12,
      suffix: "+",
      label: "Branches"
    },
    {
      description: "Happy customers served across all our locations.",  
      value: 12000,
      suffix: "+",
      label: "Happy Customers"
    },
    {
      description: "Fresh ingredients sourced daily for quality you can taste.",
      value: 100,
      suffix: "%",
      label: "Fresh"
    },
    {
      description: "The year we established Koko and started serving amazing food.",
      value: 2024,
      suffix: "",
      label: "Established"
    },
  ];
  return (
    <section className="group/container relative mx-auto w-full max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-orange-50 to-amber-50 p-10 py-20">
      <div className="relative z-20">
        <h2 className="text-center text-xl font-bold text-[var(--color-neutral-charcoal)] md:text-3xl">
          Growing Fast, Serving Fresh
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-neutral-600 md:text-base">
          Join the thousands who've discovered their new favorite food destination
        </p>
        <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={"card" + index}
              className={cn("group/card relative overflow-hidden rounded-lg bg-white/60 p-6 backdrop-blur-sm border border-orange-100")}
            >
              <div className="flex items-center gap-2">
                <p className="text-3xl font-bold text-[var(--color-primary-orange)]">
                  <AnimatedNumber value={item.value} />
                  {item.suffix}
                </p>
              </div>
              <p className="mt-2 text-lg font-semibold text-[var(--color-neutral-charcoal)]">
                {item.label}
              </p>
              <p className="mt-3 text-balance text-sm text-neutral-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}