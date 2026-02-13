"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
const cn = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(" ");

interface RippleBackgroundProps {
    children?: React.ReactNode;
    className?: string;
}

export const RippleBackground = ({ children, className }: RippleBackgroundProps) => {
    return (
        <div className={cn("relative h-full w-full flex justify-center overflow-hidden bg-base", className)}>
            <BackgroundCellCore />
            {children && (
                <div className="relative z-50 pointer-events-none select-none h-full w-full">
                    {children}
                </div>
            )}
        </div>
    );
};

const BackgroundCellCore = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [clickedCell, setClickedCell] = useState<[number, number] | null>(null);
    const ref = useRef<HTMLDivElement>(null);

    const handleMouseMove = (event: React.MouseEvent) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }
    };

    const mt = useRef<number[]>(new Array(50).fill(0));
    const my = useRef<number[]>(new Array(30).fill(0));
    const matrix = mt.current.map((_, i) => my.current.map((_, j) => [i, j]));

    const size = 300;
    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 h-full w-full"
        >
            <div className="absolute h-full w-full inset-0 overflow-hidden">
                <div
                    className="absolute inset-0 z-20 bg-transparent"
                    style={{
                        maskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
                        WebkitMaskImage: `radial-gradient(${size / 4}px circle at center, white, transparent)`,
                        WebkitMaskPosition: `${mousePosition.x - size / 2}px ${mousePosition.y - size / 2
                            }px`,
                        WebkitMaskSize: `${size}px`,
                        maskSize: `${size}px`,
                        pointerEvents: "none",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    }}
                >
                    <Pattern
                        cellClassName="border-accent/40 relative z-[100]"
                        clickedCell={clickedCell}
                        setClickedCell={setClickedCell}
                        matrix={matrix}
                    />
                </div>
                <Pattern
                    className="opacity-[0.3]"
                    cellClassName="border-white/5"
                    clickedCell={clickedCell}
                    setClickedCell={setClickedCell}
                    matrix={matrix}
                />
            </div>
        </div>
    );
};

interface PatternProps {
    className?: string;
    cellClassName?: string;
    clickedCell: [number, number] | null;
    setClickedCell: (cell: [number, number] | null) => void;
    matrix: number[][][];
}

const Pattern = ({ className, cellClassName, clickedCell, setClickedCell, matrix }: PatternProps) => {
    return (
        <div className={cn("flex flex-row relative z-30", className)}>
            {matrix.map((row, rowIdx) => (
                <div
                    key={`matrix-row-${rowIdx}`}
                    className="flex flex-col relative z-20 border-b border-white/5"
                >
                    {row.map((column, colIdx) => {
                        const controls = useAnimation();

                        useEffect(() => {
                            if (clickedCell) {
                                const distance = Math.sqrt(
                                    Math.pow(clickedCell[0] - rowIdx, 2) +
                                    Math.pow(clickedCell[1] - colIdx, 2)
                                );
                                controls.start({
                                    opacity: [0, 1 - distance * 0.1, 0],
                                    transition: { duration: distance * 0.2 },
                                });
                            }
                        }, [clickedCell]);

                        return (
                            <div
                                key={`matrix-col-${colIdx}`}
                                className={cn(
                                    "bg-transparent border-l border-b border-white/5 cursor-pointer",
                                    cellClassName
                                )}
                                onClick={() => setClickedCell([rowIdx, colIdx])}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    whileHover={{
                                        opacity: [0, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "backOut",
                                    }}
                                    animate={controls}
                                    className="bg-accent/50 h-8 w-8"
                                />
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};
