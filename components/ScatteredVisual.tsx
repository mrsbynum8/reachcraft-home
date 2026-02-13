import React, { useEffect, useRef, useState } from 'react';

const ScatteredVisual: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    // Handle resizing
    useEffect(() => {
        if (!containerRef.current) return;

        const updateDimensions = () => {
            if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                setDimensions({ width, height });
            }
        };

        const observer = new ResizeObserver(updateDimensions);
        observer.observe(containerRef.current);
        updateDimensions();

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = dimensions.width * dpr;
        canvas.height = dimensions.height * dpr;
        canvas.style.width = `${dimensions.width}px`;
        canvas.style.height = `${dimensions.height}px`;
        ctx.scale(dpr, dpr);

        const particleColor = '#ffffff';
        const width = dimensions.width;
        const height = dimensions.height;

        class Particle {
            x: number;
            y: number;
            size: number;
            order: boolean;
            velocity: { x: number; y: number };
            originalX: number;
            originalY: number;
            influence: number;
            neighbors: Particle[];

            constructor(x: number, y: number, order: boolean) {
                this.x = x;
                this.y = y;
                this.originalX = x;
                this.originalY = y;
                this.size = 2;
                this.order = order;
                this.velocity = {
                    x: (Math.random() - 0.5) * 2,
                    y: (Math.random() - 0.5) * 2
                };
                this.influence = 0;
                this.neighbors = [];
            }

            update() {
                if (this.order) {
                    const dx = this.originalX - this.x;
                    const dy = this.originalY - this.y;

                    const chaosInfluence = { x: 0, y: 0 };
                    this.neighbors.forEach(neighbor => {
                        if (!neighbor.order) {
                            const distance = Math.hypot(this.x - neighbor.x, this.y - neighbor.y);
                            const influenceRadius = 100;
                            const strength = Math.max(0, 1 - distance / influenceRadius);
                            chaosInfluence.x += (neighbor.velocity.x * strength);
                            chaosInfluence.y += (neighbor.velocity.y * strength);
                            this.influence = Math.max(this.influence, strength);
                        }
                    });

                    this.x += dx * 0.05 * (1 - this.influence) + chaosInfluence.x * this.influence;
                    this.y += dy * 0.05 * (1 - this.influence) + chaosInfluence.y * this.influence;
                    this.influence *= 0.99;
                } else {
                    this.velocity.x += (Math.random() - 0.5) * 0.5;
                    this.velocity.y += (Math.random() - 0.5) * 0.5;

                    this.velocity.x *= 0.95;
                    this.velocity.y *= 0.95;

                    this.x += this.velocity.x;
                    this.y += this.velocity.y;

                    const minX = width / 2;
                    const maxX = width;
                    const minY = 0;
                    const maxY = height;

                    if (this.x < minX || this.x > maxX) {
                        this.velocity.x *= -1;
                        this.x = Math.max(minX + 1, Math.min(maxX - 1, this.x));
                    }
                    if (this.y < minY || this.y > maxY) {
                        this.velocity.y *= -1;
                        this.y = Math.max(minY + 1, Math.min(maxY - 1, this.y));
                    }
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                const alpha = this.order ? 0.8 - this.influence * 0.5 : 0.8;
                const opacityHex = Math.round(Math.max(0, Math.min(1, alpha)) * 255).toString(16).padStart(2, '0');
                ctx.fillStyle = `${particleColor}${opacityHex}`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles: Particle[] = [];
        const spacing = 20;
        const cols = Math.floor(width / spacing);
        const rows = Math.floor(height / spacing);

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                const x = spacing * i + spacing / 2;
                const y = spacing * j + spacing / 2;
                const order = x < width / 2;
                particles.push(new Particle(x, y, order));
            }
        }

        function updateNeighbors() {
            const chaoticParticles = particles.filter(p => !p.order);

            particles.forEach(particle => {
                if (!particle.order) return;

                particle.neighbors = chaoticParticles.filter(other => {
                    const dist = Math.hypot(particle.x - other.x, particle.y - other.y);
                    return dist < 120;
                });
            });
        }

        let time = 0;
        let animationId: number;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            if (time % 10 === 0) {
                updateNeighborsSimple();
            }

            particles.forEach(particle => {
                particle.update();
                particle.draw(ctx);

                particle.neighbors.forEach(neighbor => {
                    const distance = Math.hypot(particle.x - neighbor.x, particle.y - neighbor.y);
                    if (distance < 50) {
                        const alpha = 0.15 * (1 - distance / 50);
                        ctx.strokeStyle = `${particleColor}${Math.round(alpha * 255).toString(16).padStart(2, '0')}`;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(neighbor.x, neighbor.y);
                        ctx.stroke();
                    }
                });
            });

            // Divider Line
            ctx.strokeStyle = `${particleColor}20`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(width / 2, 0);
            ctx.lineTo(width / 2, height);
            ctx.stroke();

            time++;
            animationId = requestAnimationFrame(animate);
        }

        function updateNeighborsSimple() {
            particles.forEach(particle => {
                particle.neighbors = particles.filter(other => {
                    if (particle === other) return false;
                    const dx = Math.abs(particle.x - other.x);
                    const dy = Math.abs(particle.y - other.y);
                    if (dx > 100 || dy > 100) return false;
                    const dist = Math.hypot(dx, dy);
                    return dist < 100;
                });
            });
        }

        animate();

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [dimensions]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
};

export default ScatteredVisual;
