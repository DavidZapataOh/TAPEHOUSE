import { Hero } from "./components/Hero";

const NOTES = [
  "Stock Tokens are tokenised securities issued by a third party on Robinhood Chain. They give economic exposure to an underlying share or fund; they are not the share itself.",
  "While the underlying market is closed, Tapehouse prices each Stock Token from around-the-clock sources and publishes a confidence band that widens with source disagreement, source age and volatility.",
  "Gaps between consecutive updates of the reference equity price feed on Robinhood Chain, read on-chain across weekends in August and September 2026. The longest, 80.8 hours, spans the Labor Day weekend.",
  "An around-the-clock price source, sampled at ten-minute resolution across one full 48-hour weekend: 288 of 288 expected points, longest gap 600 seconds.",
  "Share of SPY Stock Token transfers on Robinhood Chain that occurred on a Saturday or Sunday, over 69 consecutive days. A uniform week would give 28.6%.",
];

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="measured" className="border-b border-rule bg-paper">
        <div className="mx-auto max-w-[1320px] px-5 py-[clamp(5rem,12vw,9.5rem)] sm:px-8">
          <h2 className="max-w-[18ch] text-balance font-display text-[clamp(2rem,4.2vw,3.5rem)] font-normal leading-[1.06] tracking-[-0.028em] text-strong">
            The market closes on Friday. Your loan doesn’t.
          </h2>
          <p className="mt-8 max-w-[62ch] text-pretty text-[clamp(1.1rem,1.5vw,1.35rem)] leading-[1.55] text-body">
            We measured it before we built it. Every weekend the reference price feed on this chain goes
            silent for <span className="num font-semibold text-strong">55.7 to 80.8 hours</span>
            <a href="#note-3" className="fn text-accent" aria-label="Note 3">3</a>, while an
            around-the-clock source kept answering{" "}
            <span className="num font-semibold text-strong">288 times out of 288</span>
            <a href="#note-4" className="fn text-accent" aria-label="Note 4">4</a>. People don’t stop
            either: <span className="num font-semibold text-strong">29.9%</span> of SPY transfers happen
            on a Saturday or a Sunday
            <a href="#note-5" className="fn text-accent" aria-label="Note 5">5</a>.
          </p>
        </div>
      </section>

      <footer className="bg-paper">
        <div className="mx-auto grid max-w-[1320px] gap-x-16 gap-y-6 px-5 py-14 sm:px-8 lg:grid-cols-[14rem_1fr]">
          <h2 className="font-display text-[15px] font-semibold text-strong">Disclaimers and footnotes</h2>
          <ol className="max-w-[78ch] space-y-3.5 text-[13.5px] leading-[1.55] text-muted">
            {NOTES.map((note, i) => (
              <li key={i} id={`note-${i + 1}`} className="flex gap-3 scroll-mt-24">
                <span className="num w-4 shrink-0 font-semibold text-accent">{i + 1}</span>
                <span>{note}</span>
              </li>
            ))}
          </ol>
        </div>
      </footer>
    </main>
  );
}
