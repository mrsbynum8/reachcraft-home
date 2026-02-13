import React, { useRef, useState, useEffect, useCallback } from "react";

interface InfoCardProps {
    title: string;
    description: string;
    image?: string;
    icon?: React.ReactNode;
    width?: number | string;
    height?: number | string;
    borderColor?: string;
    borderBgColor?: string;
    borderWidth?: number;
    borderPadding?: number;
    cardBgColor?: string;
    patternColor1?: string;
    patternColor2?: string;
    textColor?: string;
    hoverTextColor?: string;
    effectBgColor?: string;
    contentPadding?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({
    title,
    description,
    image,
    icon,
    width = "100%",
    height = 360,
    borderColor = "#F97316",
    borderBgColor = "#0B1121",
    borderWidth = 2,
    borderPadding = 12,
    cardBgColor = "#151E32",
    patternColor1 = "rgba(255,255,255,0.03)",
    patternColor2 = "rgba(255,255,255,0.01)",
    textColor = "#9ca3af",
    hoverTextColor = "#FFFFFF",
    effectBgColor = "#F97316",
    contentPadding = "24px",
}) => {
    const [hovered, setHovered] = useState(false);
    const borderRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);

    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        setIsTouchDevice(window.matchMedia("(hover: none)").matches);
    }, []);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (isTouchDevice) return;
        if (rafRef.current) return;

        rafRef.current = requestAnimationFrame(() => {
            const border = borderRef.current;
            if (border) {
                const rect = border.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const angle = Math.atan2(y, x);
                border.style.setProperty("--rotation", `${angle}rad`);
            }
            rafRef.current = 0;
        });
    }, [isTouchDevice]);

    useEffect(() => {
        return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
    }, []);

    const pattern =
        `linear-gradient(45deg, ${patternColor1} 25%, transparent 25%, transparent 75%, ${patternColor2} 75%),` +
        `linear-gradient(-45deg, ${patternColor2} 25%, transparent 25%, transparent 75%, ${patternColor1} 75%)`;

    const borderGradient = `conic-gradient(from var(--rotation,0deg), ${borderColor} 0deg, ${borderColor} 60deg, ${borderBgColor} 60deg, ${borderBgColor} 360deg)`;

    return (
        <div
            ref={borderRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => {
                setHovered(false);
                if (borderRef.current)
                    borderRef.current.style.setProperty("--rotation", "0deg");
            }}
            className="relative group transition-transform duration-300 hover:-translate-y-1"
            style={{
                width,
                height,
                border: `${borderWidth}px solid transparent`,
                borderRadius: "16px",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                backgroundImage: `linear-gradient(${cardBgColor}, ${cardBgColor}), ${borderGradient}`,
                padding: borderPadding,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "default",
                position: "relative",
                willChange: isTouchDevice ? "auto" : "background-image",
            } as React.CSSProperties}
        >
            <div
                className="w-full h-full rounded-xl overflow-hidden flex flex-col relative"
                style={{
                    background: cardBgColor,
                    backgroundImage: pattern,
                    backgroundSize: "20px 20px",
                }}
            >
                <div className="h-48 w-full flex items-center justify-center bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
                        />
                    ) : (
                        <div className={`transform transition-all duration-500 ${hovered ? 'scale-110 rotate-3' : 'scale-100'}`}>
                            {icon || (
                                <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                                </div>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex-grow flex flex-col justify-between p-6 z-10">
                    <h3
                        className="text-xl font-bold font-display mb-2 relative overflow-hidden w-fit"
                        style={{
                            color: hovered ? hoverTextColor : '#F5F5F7',
                            transition: "color 0.3s ease",
                        }}
                    >
                        <span className="relative z-10">{title}</span>
                        <span
                            style={{
                                clipPath: hovered
                                    ? "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
                                    : "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                                transformOrigin: "bottom",
                                transition: "all cubic-bezier(.1,.5,.5,1) 0.4s",
                            }}
                            className="absolute -inset-1 z-0 bg-accent block"
                        />
                    </h3>

                    <p
                        className="text-base text-mutedText leading-relaxed"
                        style={{ color: textColor }}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
