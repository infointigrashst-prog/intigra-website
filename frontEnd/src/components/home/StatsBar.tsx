"use client";
import React, { useEffect, useRef } from "react";

interface StatItem {
  count: number;
  label: string;
}

const statsData: StatItem[] = [
  { count: 20, label: "Happy Clients" },
  { count: 5,  label: "Cities Served" },
  { count: 50, label: "Projects Delivered" },
  { count: 99, label: "% Quality Rating" },
];

export default function StatsBar() {
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

    const colors = [
      "rgba(255, 107, 43, 0.22)",  // Orange
      "rgba(30, 58, 138, 0.15)",   // Navy/Cyan
      "rgba(16, 185, 129, 0.18)",  // Green
      "rgba(239, 68, 68, 0.15)",   // Red
      "rgba(168, 85, 247, 0.18)",  // Purple
    ];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(Math.floor(canvas.width / 25), 25);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 8 + 4, // Larger bubble sizes for local strip (4px to 12px)
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

        // Draw particle bubble
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
  }, []);

  return (
    <div className="relative border-y border-slate-200 py-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
      {/* Local Background bubbles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-100"
      />

      <div className="max-w-[1200px] mx-auto px-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
        {statsData.map((stat, i) => (
          <div key={i} className="text-center md:border-r border-slate-200 last:border-none reveal">
            <div
              className="font-display text-5xl md:text-6xl bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent mb-2"
              data-count={stat.count}
            >
              0
            </div>
            <div className="text-[12px] tracking-[3px] uppercase text-slate-500 font-ui font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
