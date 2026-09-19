"use client";

import { useEffect, useRef } from "react";
import { clamp01, onScrollFrame, prefersStill } from "./scroll";

const LINES = [
  "Selling your best performer just to pay for something.",
  "Watching it keep climbing after you sold.",
  "Four stocks, priced like four separate loans.",
  "A Sunday when your own portfolio won’t answer.",
  "Losing the whole position over a drop that lasted two hours.",
];

/** Chapter two: the frustration, before a single word of mechanism. */
export function Frustrations() {
  const list = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const items = Array.from(list.current?.children ?? []) as HTMLElement[];
    if (prefersStill()) {
      items.forEach((el) => el.style.setProperty("--lit", "1"));
      return;
    }
    return onScrollFrame(() => {
      const vh = window.innerHeight;
      for (const el of items) {
        const { top, height } = el.getBoundingClientRect();
        const lit = clamp01((vh * 0.82 - (top + height / 2)) / (vh * 0.3));
        el.style.setProperty("--lit", lit.toFixed(3));
      }
    });
  }, []);

  return (
    <section className="field field-bone" aria-labelledby="ch-own">
      <div className="shell pb-[clamp(6rem,13vw,11rem)] pt-[clamp(8rem,17vw,15rem)]">
        <h2 id="ch-own" className="chapter-title max-w-[16ch]">
          You own it. You just can’t use it.
        </h2>

        <ol
          ref={list}
          className="mt-[clamp(3.5rem,8vw,7rem)] max-w-[25ch] space-y-[0.55em] lg:ml-[32%] font-display text-[clamp(1.7rem,4.1vw,3.5rem)] font-normal leading-[1.12] tracking-[-0.028em] text-strong"
        >
          {LINES.map((line) => (
            <li
              key={line}
              className="text-balance"
              style={{ opacity: "calc(0.16 + 0.84 * var(--lit, 0))" }}
            >
              {line}
            </li>
          ))}
        </ol>

        <p className="lede mt-[clamp(4rem,9vw,8rem)] max-w-[52ch] text-body lg:ml-[32%]">
          None of this is new. Professional desks have been margined on their whole portfolio for
          decades, and wealthy families have borrowed against their shares instead of selling them for
          longer than that. On-chain, every Stock Token is still priced alone.
        </p>
      </div>
    </section>
  );
}
