"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
const cn = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(" ");

interface BorderBeamProps {
    size?: number;
    duration?: number;
    delay?: number;
    colorFrom?: string;
    colorTo?: string;
    transition?: Transition;
    className?: string;
    style?: React.CSSProperties;
    reverse?: boolean;
    initialOffset?: number;
    borderWidth?: number;
}

export const BorderBeam = ({
    className,
    size = 50,
    delay = 0,
    duration = 6,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    transition,
    style,
    reverse = false,
    initialOffset = 0,
    borderWidth = 1.5,
}: BorderBeamProps) => {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent",
                className
            )}
            style={{
                borderWidth: borderWidth,
                maskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
                WebkitMaskImage: "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
                maskClip: "padding-box, border-box",
                WebkitMaskClip: "padding-box, border-box",
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
                ...style,
            } as React.CSSProperties}
        >
            <motion.div
                className={cn(
                    "absolute aspect-square",
                    "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent"
                )}
                style={{
                    width: size,
                    offsetPath: `rect(0 auto auto 0 round ${size}px)`,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                } as any}
                initial={{ offsetDistance: `${initialOffset}%` }}
                animate={{
                    offsetDistance: reverse
                        ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
                        : [`${initialOffset}%`, `${100 + initialOffset}%`],
                }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration,
                    delay: -delay,
                    ...transition,
                }}
            />
        </div>
    );
};
