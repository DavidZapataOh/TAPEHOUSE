import { AssetSlot } from "./AssetSlot";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "#open-app";

/** The bookend: the same hall as the opening shot, on Monday morning. */
export function Closing() {
  return (
    <section className="field field-navy overflow-hidden" aria-labelledby="ch-close">
      <AssetSlot
        id="V2"
        className="absolute inset-4 sm:inset-6"
        brief="The opening hall again, same locked-off camera, Monday 09:30: daylight, every desk lit."
        spec="Film loop 8–12 s · 1920×1080 · poster JPG"
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
