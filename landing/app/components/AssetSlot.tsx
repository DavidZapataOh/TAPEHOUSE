/** A labelled hole for an asset that is still being produced. */
export function AssetSlot({
  id,
  brief,
  spec,
  className = "",
}: {
  id: string;
  brief: string;
  spec: string;
  className?: string;
}) {
  return (
    <div className={`slot ${className}`} role="img" aria-label={`Placeholder for artwork: ${brief}`}>
      <span className="flex max-w-[36ch] flex-col gap-2.5">
        <span className="font-mono text-[11px] uppercase tracking-[0.12em]">Artwork pending · {id}</span>
        <span className="text-[14px] leading-snug">{brief}</span>
      </span>
      <span className="font-mono text-[11px] tracking-[0.06em] opacity-80">{spec}</span>
    </div>
  );
}
