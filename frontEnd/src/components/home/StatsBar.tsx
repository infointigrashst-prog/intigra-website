"use client";
import React from "react";
import BubbleBackground from "@/components/comman/BubbleBackground";

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
  return (
    <div className="relative border-y border-slate-200 py-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #F0FDF4 0%, #ecfdf5 100%)" }}>
      {/* Reusable Local Background bubbles canvas */}
      <BubbleBackground opacity={1} theme="light" />

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
