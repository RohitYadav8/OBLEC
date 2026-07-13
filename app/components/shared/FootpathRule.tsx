/* ---------------------------------------------------------------
   Signature element: the footpath / contour rule — a dashed line
   with perpendicular ticks, the way a right-of-way is marked on an
   Ordnance Survey map. Ties hero, dividers and section breaks
   together across every page on the site.

   Color comes from the `text-*` Tailwind class you pass in
   (the SVG uses currentColor), e.g.:
     <FootpathRule className="w-full max-w-xs h-3 text-sage" />
----------------------------------------------------------------- */
export function FootpathRule({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 12"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <line x1="0" y1="6" x2="400" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 8" />
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1={i * 40} y1="1" x2={i * 40} y2="11" stroke="currentColor" strokeWidth="1.5" />
      ))}
    </svg>
  );
}
