const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "#open-app";

/** The bookend: the same hall as the opening shot, on Monday morning. */
export function Closing() {
  return (
    <section className="field field-navy overflow-hidden" aria-labelledby="ch-close">
      {/* Placeholder plate. The final asset is the filmed daylight shot of the opening hall. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero/floor-day.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover saturate-[0.45]"
      />
      <div className="absolute inset-0 bg-[#0e2149] opacity-[0.78] mix-blend-multiply" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(14_33_73/0.55)_0%,rgb(14_33_73/0)_70%)]"
        aria-hidden="true"
      />
      <div className="shell relative flex min-h-[88svh] flex-col items-center justify-center pb-28 pt-44 text-center">
        <h2 id="ch-close" className="chapter-title max-w-[16ch]">
          The bell rings on Monday. You didn’t wait for it.
        </h2>
        <p className="lede mt-7 max-w-[46ch]">
          Open an account on testnet, deposit the whole portfolio, and read your liquidation price
          before you sign anything.
        </p>
        <a href={APP_URL} className="btn-primary mt-10 text-[15px]">
          Open the app
          <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-60">Testnet</span>
        </a>
      </div>
    </section>
  );
}
