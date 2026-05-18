export function LegalSection({ number, title, children }) {
  return (
    <section className="mb-12 sm:mb-14 last:mb-0">
      <div className="flex items-baseline gap-4 mb-5">
        {number && (
          <span className="font-assistant text-gold/80 text-sm tracking-[0.2em] font-semibold tabular-nums flex-shrink-0">
            {String(number).padStart(2, '0')}
          </span>
        )}
        <h2 className="font-serif-display text-deep text-2xl sm:text-3xl font-bold leading-snug">
          {title}
        </h2>
      </div>
      <div className="pr-0 sm:pr-12 space-y-4 font-assistant text-deep/75 text-base sm:text-[17px] leading-[1.9]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }) {
  return (
    <ul className="space-y-2.5 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-gold flex-shrink-0 mt-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}