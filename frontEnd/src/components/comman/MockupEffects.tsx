"use client";
import React, { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import BubbleBackground from "@/components/comman/BubbleBackground";

export default function MockupEffects() {
  const pathname = usePathname();
  const [loaded, setLoaded] = useState(false);
  const [preloaderActive, setPreloaderActive] = useState(true);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  // Initial loader progress bar state
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Preloader Progress Animation
    let progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Fade out loader and initialize effects after loader finishes
      const timer = setTimeout(() => {
        setPreloaderActive(false);
        // Trigger initial hero GSAP animation if script has loaded
        // @ts-ignore
        if (window.gsap) {
          // @ts-ignore
          const gsap = window.gsap;
          gsap.to("#heroEyebrow", { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: "power2.out" });
          gsap.to("#heroTitle", { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" });
          gsap.to("#heroSub", { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" });
          gsap.to("#heroBtns", { opacity: 1, y: 0, duration: 0.8, delay: 0.8, ease: "back.out(1.7)" });
          gsap.to("#scrollInd", { opacity: 1, y: 0, duration: 0.8, delay: 1.0 });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [progress]);

  useEffect(() => {
    if (pathname === "/" && loaded) {
      const timer = setTimeout(() => {
        // @ts-ignore
        if (window.gsap) {
          // @ts-ignore
          const gsap = window.gsap;
          gsap.to("#heroEyebrow", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
          gsap.to("#heroTitle", { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
          gsap.to("#heroSub", { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
          gsap.to("#heroBtns", { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" });
          gsap.to("#scrollInd", { opacity: 1, y: 0, duration: 0.8 });
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, loaded]);

  useEffect(() => {
    // 3. Custom Cursor Follower & Hover Easing
    const onMouseMove = (e: MouseEvent) => {
      const cursor = cursorRef.current;
      const cursorRing = cursorRingRef.current;
      
      // @ts-ignore
      if (window.gsap && cursor && cursorRing) {
        // @ts-ignore
        const gsap = window.gsap;
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
        gsap.to(cursorRing, { x: e.clientX, y: e.clientY, duration: 0.25 });
      } else {
        // Fallback standard cursor update if GSAP is not ready yet
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
        if (cursorRing) {
          cursorRing.style.left = `${e.clientX}px`;
          cursorRing.style.top = `${e.clientY}px`;
        }
      }
    };

    const setupHoverListeners = () => {
      const cursor = cursorRef.current;
      const cursorRing = cursorRingRef.current;
      if (!cursor || !cursorRing) return;

      const hoverables = document.querySelectorAll(
        "a, button, [role='button'], .product-card, .industry-card, input, select, textarea"
      );

      hoverables.forEach((el) => {
        const enterHandler = () => {
          cursor.style.width = "20px";
          cursor.style.height = "20px";
          cursor.style.backgroundColor = "var(--cyan)";
          cursorRing.style.width = "60px";
          cursorRing.style.height = "60px";
          cursorRing.style.borderColor = "rgba(0, 200, 255, 0.6)";
        };

        const leaveHandler = () => {
          cursor.style.width = "12px";
          cursor.style.height = "12px";
          cursor.style.backgroundColor = "var(--orange)";
          cursorRing.style.width = "40px";
          cursorRing.style.height = "40px";
          cursorRing.style.borderColor = "rgba(255, 107, 43, 0.5)";
        };

        el.addEventListener("mouseenter", enterHandler);
        el.addEventListener("mouseleave", leaveHandler);
        
        // Clean up listeners when DOM elements are updated
        (el as any)._cleanupCursorListeners = () => {
          el.removeEventListener("mouseenter", enterHandler);
          el.removeEventListener("mouseleave", leaveHandler);
        };
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Initial setup and polling to catch client-side rendered links
    setupHoverListeners();
    const interval = setInterval(setupHoverListeners, 1500);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clearInterval(interval);
      document.querySelectorAll("*").forEach((el: any) => {
        if (el._cleanupCursorListeners) el._cleanupCursorListeners();
      });
    };
  }, [loaded, preloaderActive]);

  useEffect(() => {
    // 4. Viewport Intersection Scroll Reveal and Counters
    const animateValue = (obj: HTMLElement, start: number, end: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentCount = Math.floor(progress * (end - start) + start);
        
        if (end === 99) {
          obj.innerHTML = currentCount.toString() + "%";
        } else {
          obj.innerHTML = currentCount.toString() + "+";
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          obj.innerHTML = end.toString() + (end === 99 ? "%" : "+");
        }
      };
      window.requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            // Check for stats counter
            const counterElement = entry.target.querySelector("[data-count]");
            if (counterElement && !counterElement.classList.contains("counted")) {
              counterElement.classList.add("counted");
              const target = parseInt(counterElement.getAttribute("data-count") || "0", 10);
              animateValue(counterElement as HTMLElement, 0, target, 2000);
            }
          }
        });
      },
      { threshold: 0.08 }
    );

    const setupObservers = () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.observe(el);
      });
    };

    setupObservers();
    // Re-check periodically for dynamically added DOM sections
    const interval = setInterval(setupObservers, 1500);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const handleScriptLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {/* Dynamic CDN imports of GSAP */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        onLoad={handleScriptLoad}
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TextPlugin.min.js"
        strategy="afterInteractive"
      />

      {/* Preloader overlay */}
      {preloaderActive && (
        <div
          id="loader"
          className="fixed inset-0 z-[10000] bg-[#F0FDF4] flex flex-col items-center justify-center gap-6 select-none transition-opacity duration-500 ease-out"
          style={{ opacity: progress === 100 ? 0 : 1 }}
        >
          {/* Reusable Background bubbles canvas */}
          <BubbleBackground opacity={0.8} theme="light" />
          <div className="font-display text-5xl sm:text-6xl tracking-[8px] bg-gradient-to-r from-[#ff6b2b] via-[#f5c842] to-[#8b5cf6] bg-[length:300%_300%] bg-clip-text text-transparent animate-gradientShift">
            INTIGRA
          </div>
          <div className="w-[200px] h-[2px] bg-emerald-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-[10px] tracking-[4px] uppercase text-emerald-800/60 font-ui font-semibold">
            Initialising Experience
          </div>
        </div>
      )}

      {/* Custom Mouse Cursor FOLLOWERS (hidden on mobile) */}
      <div
        id="cursor"
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] rounded-full mix-blend-screen transition-[width,height,background-color] duration-200 hidden md:block"
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: "var(--orange)",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        id="cursor-ring"
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[9998] rounded-full border transition-[width,height,border-color] duration-300 hidden md:block"
        style={{
          width: "40px",
          height: "40px",
          borderColor: "rgba(255, 107, 43, 0.5)",
          left: 0,
          top: 0,
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Reusable Ambient background particles canvas */}
      <BubbleBackground
        opacity={0.3}
        theme="light"
        className="fixed inset-0 w-screen h-screen pointer-events-none z-30"
      />

      {/* SVG filter to dynamically key out white backgrounds from logo images */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="remove-white" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      -3 -3 -3 9 -0.5"
            />
          </filter>
          <filter id="logo-to-white" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1
                      0 0 0 0 1
                      0 0 0 0 1
                      -3 -3 -3 9 -0.5"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
}
