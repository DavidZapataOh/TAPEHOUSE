import { Mark } from "./Mark";
import { Seal } from "./Seal";

const NOTES = [
  "Stock Tokens are tokenised securities issued by a third party on Robinhood Chain. They give economic exposure to an underlying share or fund; they are not the share itself.",
  "While the underlying market is closed, Tapehouse prices each Stock Token from around-the-clock sources and publishes a confidence band that widens with source disagreement, source age and volatility.",
  "Gaps between consecutive updates of the reference equity price feed on Robinhood Chain, read on-chain across weekends in August and September 2026. The longest, 80.8 hours, spans the Labor Day weekend.",
  "An around-the-clock price source, sampled at ten-minute resolution across one full 48-hour weekend: 288 of 288 expected points, longest gap 600 seconds.",
  "Share of SPY Stock Token transfers on Robinhood Chain that occurred on a Saturday or Sunday, over 69 consecutive days. A uniform week would give 28.6%.",
  "A 62.5% limit per token is what lending markets on this chain applied to large-cap Stock Tokens such as SPY, NVDA and TSLA, as read from their public interfaces in September 2026.",
  "The illustrative model takes the worst one percent of outcomes over a three-day closed market, from assumed volatilities and correlations, doubles it as a stress, and holds back a further ten percent. The assumptions are for demonstration and are not the parameters Tapehouse lends on.",
  "As far as we could find in September 2026, by reading the public sites and documentation of the lending protocols that accept Stock Tokens on Robinhood Chain.",
];

export function Footer() {
  return (
    <footer className="field field-night">
      <div className="shell pb-10 pt-[clamp(5rem,10vw,8rem)]">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 text-strong">
              <Mark className="h-9 w-auto" />
              <span className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold tracking-[0.16em]">TAPEHOUSE</span>
            </div>
            <p className="mt-4 text-[1.05rem] text-muted">Portfolio margin for Stock Tokens.</p>
          </div>
          <Seal />
        </div>

        <div className="mt-[clamp(3.5rem,7vw,6rem)] grid gap-x-16 gap-y-14 border-t border-rule pt-12 lg:grid-cols-2">
          <section aria-labelledby="ft-risk">
            <h2 id="ft-risk" className="font-display text-[15px] font-semibold text-strong">Read this before you borrow</h2>
            <div className="mt-5 max-w-[64ch] space-y-4 text-[13.5px] leading-[1.6] text-muted">
              <p>
                Tapehouse is a smart-contract protocol, not a broker, a bank or a regulated financial
                services provider. Nothing on this page is investment, legal or tax advice, and nothing
                here is an offer of credit. Tapehouse currently runs on a test network, where assets
                have no value.
              </p>
              <p>
                Stock Tokens are tokenised securities issued by a third party. They carry risks that
                owning shares directly does not: loss or compromise of your keys, limited redemption,
                thin liquidity, prices that diverge from the underlying share, and regulation that is
                uncertain and still changing.
              </p>
              <p>
                Borrowing against a portfolio can lose you part or all of it. If the value of your
                holdings falls far enough, some of them will be sold to repay the loan, and that can
                happen while the underlying market is closed. A published band is an estimate, and it
                is sometimes wrong; that is why we publish the record. Price sources can fail, smart
                contracts can contain errors, and a network can halt.
              </p>
              <p>Tapehouse may not be available where you live. Check before you use it.</p>
            </div>
          </section>

          <section aria-labelledby="ft-notes">
            <h2 id="ft-notes" className="font-display text-[15px] font-semibold text-strong">Disclaimers and footnotes</h2>
            <ol className="mt-5 max-w-[64ch] space-y-3.5 text-[13.5px] leading-[1.6] text-muted">
              {NOTES.map((note, i) => (
                <li key={i} id={`note-${i + 1}`} className="flex scroll-mt-24 gap-3 target:text-strong">
                  <span className="num w-4 shrink-0 font-semibold text-accent">{i + 1}</span>
                  <span>{note}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <p className="mt-14 flex flex-wrap justify-between gap-x-8 gap-y-2 border-t border-rule pt-6 text-[13px] text-faint">
          <span>© 2026 Tapehouse</span>
          <span>Runs on Robinhood Chain testnet</span>
        </p>
      </div>
    </footer>
  );
}
