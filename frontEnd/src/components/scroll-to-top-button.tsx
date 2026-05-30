"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
      toggleVisibility();
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, []);

  return (
    <Button
      onClick={scrollToTop}
      variant="default"
      size="icon"
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full shadow-xl transition-all duration-300 ease-in-out " +
          "hover:bg-orange-600/90 bg-orange-500 text-white border-2 border-white",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
