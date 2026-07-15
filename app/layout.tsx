import type { Metadata } from "next";
import "./globals.css";
import {  fontVars } from "./lib/fonts";

export const metadata: Metadata = {
  title: "OBLEC — Old Basing & Lychpit Environment Campaign",
  description: "Old Basing & Lychpit Environment Campaign",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVars} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
