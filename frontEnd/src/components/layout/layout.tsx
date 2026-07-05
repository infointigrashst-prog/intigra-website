"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Footer from "./footer";
import Navbar from "./navbar";

export default function CustomLayout({ children }: any) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      <Navbar />
      <main className={cn("flex-grow", !isHome && "pt-[80px] md:pt-[92px]")}>
        {children}
      </main>
      <Footer />
    </>
  );
}
