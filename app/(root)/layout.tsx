import type { Metadata } from "next";
import { Geist, Lato } from "next/font/google";
import Navbar from "@/app/components/Navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
      {/* <Navbar /> */}
      {children}
    </main>
  );
}
