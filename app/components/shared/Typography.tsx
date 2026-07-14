import type React from "react";

/* Body paragraph — quiet, legible copy color used throughout the case text. */
export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-8 text-body">{children}</p>;
}

/* Small underlined heading used to break up longer case sections. */
export function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-2 font-display font-semibold text-[1.15rem] text-moss-dark underline decoration-sage underline-offset-[6px]">
      {children}
    </h3>
  );
}

/* A section of the case, filed under a mono "entry code" heading —
   like a numbered clause in a planning document. Pass `code` to show
   it (e.g. "01"); omit it for a clean heading with just a left accent. */
export function CaseSection({
  id,
  code,
  title,
  children,
}: {
  id: string;
  code?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="py-12 scroll-mt-24 border-t border-sage/50">
      <div className="flex items-center gap-4 mb-5">
        <span className="w-1.5 h-7 bg-clay rounded-full shrink-0" aria-hidden="true" />
        {code && <span className="text-xs font-mono text-clay">{code}</span>}
        <h3 className="uppercase tracking-[0.12em] font-display font-semibold text-[1.4rem] text-moss-dark">
          {title}
        </h3>
      </div>
      <div className="max-w-3xl space-y-4">{children}</div>
    </div>
  );
}

/* A quoted / indented policy extract, e.g. Local Plan clauses. */
export function PolicyQuote({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-2 pl-6 py-1 border-l-[3px] border-clay">
      <span className="uppercase tracking-[0.18em] text-xs font-mono text-clay">{label}</span>
      <p className="mt-2 leading-8 italic text-body">{children}</p>
    </div>
  );
}
