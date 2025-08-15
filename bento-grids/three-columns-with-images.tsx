"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

export function ThreeColumnsWithImages() {
  return (
    <div className="mx-auto my-20 w-full max-w-7xl px-4 md:px-8 bg-white">
      <h2 className="text-center font-[var(--font-display)] text-xl font-bold tracking-tight md:text-4xl text-[var(--color-neutral-charcoal)]">
        Taste the Koko Difference
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-center text-sm text-muted-foreground">
        Every dish crafted with passion, served with love. Experience our signature flavors that keep customers coming back for more.
      </p>
      <div className="cols-1 mt-20 grid gap-4 md:auto-rows-[25rem] md:grid-cols-3">
        {items.map((item, index) => (
          <Card
            key={item.title + index + "card-three-columns-with-images"}
            className={cn("flex flex-col justify-between", item.className)}
          >
            <CardContent className="h-40">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
            <CardSkeletonBody>{item.header}</CardSkeletonBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    title: "Classic Koko Burger",
    description:
      "Juicy beef patty with fresh lettuce, tomatoes, and our secret sauce on a toasted brioche bun.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500&auto=format&fit=crop"
        alt="Classic Koko Burger"
        width={500}
        height={500}
        className="ml-6 w-full rounded-lg object-cover"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Crispy Chicken Delight",
    description:
      "Golden crispy chicken pieces seasoned to perfection, served hot with your choice of dipping sauce.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=500&auto=format&fit=crop"
        alt="Crispy Chicken Delight"
        width={500}
        height={500}
        className="w-full rounded-lg object-cover"
      />
    ),
    className: "md:col-span-1",
  },
  {
    title: "Loaded Specialty Sides",
    description:
      "Crispy golden fries loaded with cheese, bacon bits, and green onions. The perfect complement to any meal.",
    header: (
      <Image
        src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500&auto=format&fit=crop"
        alt="Loaded Specialty Sides"
        width={500}
        height={500}
        className="-ml-6 -mt-4 rounded-lg object-cover md:-mt-0"
      />
    ),
    className: "md:col-span-1",
  },
];

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("overflow-hidden", className)}>{children}</div>;
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = { initial: { x: 0 }, animate: { x: 10 } };
  return (
    <motion.h3
      variants={variants}
      transition={{ type: "easeOut", duration: 0.2 }}
      className={cn(
        "font-[var(--font-display)] text-base font-medium tracking-tight text-[var(--color-neutral-charcoal)]",
        className
      )}
    >
      {children}
    </motion.h3>
  );
};

const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variants = { initial: { x: 0 }, animate: { x: 15 } };
  return (
    <motion.p
      variants={variants}
      transition={{ type: "easeOut", duration: 0.2 }}
      className={cn(
        "mt-2 max-w-xs font-[var(--font-body)] text-base font-normal tracking-tight text-muted-foreground",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group isolate flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_12px_rgba(255,107,53,0.15)] transition-all duration-300 hover:border-[var(--color-primary-orange)] border border-transparent",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
