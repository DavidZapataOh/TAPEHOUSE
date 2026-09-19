import type { Metadata } from "next";
import { Entry, PlainPage } from "../components/PlainPage";

export const metadata: Metadata = {
  title: "Methodology — Tapehouse",
  description: "How every figure on the Tapehouse site was measured, and what the illustrative model assumes.",
};

export default function Methodology() {
  return (
    <PlainPage
      title="How we measured it"
      lede="Every figure on this site comes from somewhere you can check. This is where, and how."
    >
      <Entry heading="$109.2 billion against $31.2 billion">
        <p>
          Morgan Stanley’s annual report on Form 10-K for fiscal year 2025, Wealth Management loans:
          “Securities-based lending and Other” of $109,201 million, and margin loans of $31,214 million.
          The first category includes lending other than securities-based loans, so read it as an upper
          bound. That most of it is borrowed to avoid selling is our reading, not the filing’s.
        </p>
      </Entry>
      <Entry heading="55.7 to 80.8 hours of silence">
        <p>
          The gaps between consecutive updates of the reference equity price feed on Robinhood Chain, read
          on-chain across weekends in August and September 2026. The longest, 80.8 hours, spans the Labor
          Day weekend. The weekend drawn on the overview is 28–31 August 2026: last update Friday 16:18 UTC,
          next update Monday 00:00 UTC.
        </p>
      </Entry>
      <Entry heading="288 of 288">
        <p>
          An around-the-clock price source, sampled at ten-minute resolution across one full 48-hour
          weekend. All 288 expected points were present, and the longest gap between two of them was 600
          seconds.
        </p>
      </Entry>
      <Entry heading="29.9% of SPY transfers">
        <p>
          The share of SPY Stock Token transfers on Robinhood Chain that occurred on a Saturday or a Sunday,
          over 69 consecutive days. A perfectly even week would give 28.6%.
        </p>
      </Entry>
      <Entry heading="The 62.5% flat rule">
        <p>
          The per-token limit that lending markets on this chain applied to large-cap Stock Tokens such as
          SPY, NVDA and TSLA, as read from their public interfaces in September 2026.
        </p>
      </Entry>
      <Entry heading="The illustrative portfolio model">
        <p>
          The interactive model takes the worst one percent of outcomes over a three-day closed market,
          from assumed volatilities and correlations, doubles it as a stress, and holds back a further ten
          percent. The assumptions exist to show the mechanism. They are not the parameters Tapehouse
          lends on, which are published with the backtest.
        </p>
      </Entry>
      <Entry heading="The price band">
        <p>
          While the underlying market is closed, Tapehouse prices each Stock Token from around-the-clock
          sources and publishes a confidence band. Three things widen it: how far the sources disagree, how
          old each source is, and how volatile the token has been.
        </p>
      </Entry>
      <Entry heading="The record">
        <p>
          Each Sunday night the expected Monday band is sealed; each Monday the first fresh market print
          grades it. The rows currently shown on the overview are sample rows that illustrate the format,
          and are marked as such. They are replaced by the sealed record when the backtest is published.
        </p>
      </Entry>
    </PlainPage>
  );
}
