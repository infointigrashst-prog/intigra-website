"use client";

import Footer from "./footer";
import Navbar from "./navbar";

export default function CustomLayout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
      {children}
      </main>
      <Footer />
    </>
  );
}
