"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { animate, stagger, useInView } from "motion/react";

export function PlayfulHeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div ref={ref} className="mb-20 w-full bg-white">
      <div className="mx-auto grid max-h-[50rem] max-w-7xl grid-cols-1 items-start gap-10 overflow-hidden pt-10 sm:grid-cols-2 md:max-h-[40rem] md:pt-20 lg:grid-cols-3">
        <div className="px-4 py-10 md:px-8 md:py-10 lg:col-span-2">
          <RoughNotationGroup show={isInView}>
            {/* Koko Logo */}
            <div className="mb-8 flex justify-center sm:justify-start">
              <div className="font-[var(--font-display)] text-3xl font-bold text-primary">
                Koko
              </div>
            </div>
            
            <h2
              className={cn(
                "text-center text-2xl font-bold tracking-tight text-neutral-charcoal sm:text-left sm:text-4xl lg:text-7xl font-[var(--font-display)]"
              )}
            >
              Koko -{" "}
              <RoughNotation
                type="highlight"
                animationDuration={2000}
                iterations={3}
                color="#FF6B3580"
                multiline
              >
                <span className="text-currentColor">Where Every Bite Counts!</span>
              </RoughNotation>
            </h2>
            <p className="mt-4 max-w-2xl text-center text-sm text-muted-foreground sm:text-left md:mt-10 md:text-lg font-[var(--font-body)]">
              Experience the bold flavors of our signature burgers, crispy chicken, and irresistible non-veg delights.{" "}
              <RoughNotation
                type="underline"
                animationDuration={2000}
                iterations={3}
                color="#FF6B35"
              >
                Now serving happiness across 12 locations!
              </RoughNotation>
            </p>
          </RoughNotationGroup>
          <div className="mt-10 flex flex-col items-center gap-4 [perspective:800px] sm:flex-row">
            <button className="w-full origin-left rounded-lg bg-primary px-4 py-2 text-base font-bold text-primary-foreground transition duration-200 hover:shadow-lg hover:[transform:rotateX(10deg)] sm:w-auto font-[var(--font-display)]">
              Order Now
            </button>
            <button className="rounded-lg border border-primary px-4 py-2 text-base text-primary transition duration-200 hover:bg-primary hover:text-primary-foreground font-[var(--font-display)]">
              Join Our Franchise
            </button>
          </div>
        </div>
        <div className="relative flex h-full w-full flex-shrink-0 justify-end overflow-hidden">
          <BurgerShowcase />
        </div>
      </div>
    </div>
  );
}

export const BurgerShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    const sequence = [
      [".hero-burger", { opacity: [0, 1], scale: [0.8, 1] }, { duration: 1, ease: "easeOut" }],
      [".signature-text", { opacity: [0, 1] }, { duration: 0.8, ease: "easeOut" }],
      [
        ".food-items .food-item",
        {
          opacity: [0, 1],
          y: [20, 0],
          scale: [0.9, 1],
        },
        { duration: 0.8, ease: "easeOut", delay: stagger(0.2) },
      ],
    ];

    //@ts-ignore
    if (isInView) animate(sequence);
  }, [isInView]);

  return (
    <div ref={ref} className="relative m-auto h-[600px] w-[400px] pt-5">
      {/* Main Hero Burger */}
      <div className="hero-burger relative z-20 mb-6 flex justify-center opacity-0">
        <Image
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Signature Koko Burger"
          height="250"
          width="300"
          className="rounded-xl object-cover shadow-2xl"
        />
      </div>
      
      {/* Signature Text */}
      <div className="signature-text mb-4 text-center opacity-0">
        <p className="font-[var(--font-display)] text-lg font-bold text-primary">
          Our Signature Delights
        </p>
      </div>

      {/* Food Items Grid */}
      <div className="food-items grid grid-cols-2 gap-3 px-4">
        <Image
          src="https://images.unsplash.com/photo-1606755962773-d324e2d53352?q=80&w=2974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Crispy Chicken"
          height="120"
          width="150"
          className="food-item h-[100px] w-full rounded-lg object-cover opacity-0 shadow-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Loaded Burger"
          height="120"
          width="150"
          className="food-item h-[100px] w-full rounded-lg object-cover opacity-0 shadow-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Spicy Wings"
          height="120"
          width="150"
          className="food-item h-[100px] w-full rounded-lg object-cover opacity-0 shadow-md"
        />
        <Image
          src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=2971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Grilled Specialties"
          height="120"
          width="150"
          className="food-item h-[100px] w-full rounded-lg object-cover opacity-0 shadow-md"
        />
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-gradient-to-br from-primary/20 to-transparent rounded-2xl"></div>
      </div>
    </div>
  );
};

export const Skeleton = BurgerShowcase;

export const MobileMockup = ({ className }: { className?: string }) => {
  return (
    <svg
      width="421"
      height="852"
      viewBox="0 0 421 852"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute inset-0 mx-auto h-full w-full flex-shrink-0 object-cover object-top text-neutral-900 dark:text-neutral-50",
        className
      )}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73 0H348C386.66 0 418 31.3401 418 70V782C418 820.66 386.66 852 348 852H73C34.3401 852 3 820.66 3 782V70C3 31.3401 34.3401 0 73 0ZM348 6H73C37.6538 6 9 34.6538 9 70V782C9 817.346 37.6538 846 73 846H348C383.346 846 412 817.346 412 782V70C412 34.6538 383.346 6 348 6Z"
        fill="currentColor"
      />
      <rect
        x="318"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="93"
        y="846"
        width="10"
        height="6"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="90"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="3"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <rect
        x="412"
        y="752"
        width="6"
        height="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M417.971 266H418.981C420.096 266 421 266.895 421 268V364C421 365.105 420.096 366 418.981 366H417.971V266Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 302C0 300.895 0.90402 300 2.01918 300H3.02878V363H2.01918C0.90402 363 0 362.105 0 361V302Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 223C0 221.895 0.90402 221 2.01918 221H3.02878V284H2.01918C0.90402 284 0 283.105 0 282V223Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 162C0 160.895 0.90402 160 2.01918 160H3.02878V193H2.01918C0.90402 193 0 192.105 0 191V162Z"
        fill="currentColor"
      />
      <rect
        x="150"
        y="30"
        width="120"
        height="35"
        rx="17.5"
        fill="currentColor"
      />
      <rect
        x="244"
        y="41"
        width="13"
        height="13"
        rx="6.5"
        fill="currentColor"
        fillOpacity="0.1"
      />
    </svg>
  );
};