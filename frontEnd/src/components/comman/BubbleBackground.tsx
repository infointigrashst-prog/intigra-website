"use client";
import React, { useEffect, useRef } from "react";

interface BubbleBackgroundProps {
  opacity?: number;
  particleCount?: number;
  speed?: number;
  className?: string;
  theme?: "light" | "dark";
}

export default function BubbleBackground({
  opacity = 0.8,
  particleCount,
  speed = 0.35,
  className = "absolute inset-0 w-full h-full pointer-events-none z-0",
  theme = "light",
}: BubbleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    }> = [];

    // Curated pastel/glow translucent watercolor bubble colors
    const colors =
      theme === "dark"
        ? [
            "rgba(255, 107, 43, 0.22)",  // Orange
            "rgba(0, 229, 255, 0.18)",   // Cyan
            "rgba(255, 200, 55, 0.18)",   // Yellow
            "rgba(16, 185, 129, 0.15)",   // Green
            "rgba(168, 85, 247, 0.18)",   // Purple
          ]
        : [
            "rgba(255, 107, 43, 0.18)",  // Orange
            "rgba(30, 58, 138, 0.12)",   // Blue
            "rgba(16, 185, 129, 0.15)",  // Green
            "rgba(239, 68, 68, 0.12)",   // Red
            "rgba(168, 85, 247, 0.15)",  // Purple
          ];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || 300;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count =
        particleCount || Math.min(Math.floor(canvas.width / 35), 25);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 8 + 3, // Sizes between 3px and 11px
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Boundary checks (wrap around cleanly)
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.y < -20) p.y = canvas.height + 20;
        if (p.y > canvas.height + 20) p.y = -20;

        // Draw bubble
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    drawParticles();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [particleCount, speed, theme]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ opacity }}
    />
  );
}
