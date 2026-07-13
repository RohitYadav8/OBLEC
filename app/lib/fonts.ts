import { Fraunces, Work_Sans, IBM_Plex_Mono } from "next/font/google";

export const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--nf-display",
});

export const body = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-body",
});

export const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
});

// Apply this className on the outermost wrapper of every page
export const fontVars = `${display.variable} ${body.variable} ${mono.variable}`;