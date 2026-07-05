import type { ReactNode } from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  description?: string | ReactNode;
  children?: ReactNode;
  category?: string; // Optional parent category for breadcrumbs
}

export default function PageHeader({ title, description, children, category }: PageHeaderProps) {
  return (
    <section 
      className="relative py-20 md:py-28 overflow-hidden border-b border-white/5"
      style={{ background: "#0d0d15" }}
    >
      {/* Abstract Industrial Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Decorative ambient soft glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-orange-500 opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-cyan-500 opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="container max-w-screen-xl mx-auto text-center relative z-10 px-6">
        
        {/* Dynamic Breadcrumbs - Styled as a Flex Block to prevent overlapping */}
        <nav className="flex justify-center items-center flex-wrap gap-2 text-[10px] sm:text-[11px] font-mono tracking-wider uppercase text-zinc-400 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            HOME
          </Link>
          <span>/</span>
          {category ? (
            <>
              <Link href={`/${category.toLowerCase()}`} className="hover:text-orange-500 transition-colors">
                {category}
              </Link>
              <span>/</span>
            </>
          ) : null}
          <span className="text-orange-500 font-semibold">{title}</span>
        </nav>

        {/* Title Block with Block display to ensure vertical division */}
        <div className="block mb-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white tracking-[2px] uppercase leading-tight">
            {title}
          </h1>
          <div className="w-16 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-4" />
        </div>

        {description && (
          <p className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-light block">
            {description}
          </p>
        )}

        {children && <div className="mt-8 block">{children}</div>}
      </div>
    </section>
  );
}
