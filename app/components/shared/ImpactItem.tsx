import type React from "react";

/* A single reason list item, marked with a short tick rather than
   a generic round bullet — echoes the footpath rule's ticks. */
export function ImpactItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4 py-4 border-t border-sage/50">
      <span aria-hidden="true" className="text-sm pt-0.5 font-mono text-clay">
        —
      </span>
      <span className="leading-7 text-body">{children}</span>
    </li>
  );
}
