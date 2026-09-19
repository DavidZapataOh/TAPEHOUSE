import record from "../data/record.json";
import { AssetSlot } from "./AssetSlot";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const day = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d} ${MONTHS[Number(m) - 1]} ${y}`;
};
const signed = (v: number) => `${v > 0 ? "+" : v < 0 ? "−" : ""}${Math.abs(v).toFixed(2)}%`;

/** Chapter six: the record, computed from the data file, never typed by hand. */
export function Record() {
  const rows = record.weekends.map((w) => ({ ...w, inside: Math.abs(w.move) <= w.band }));
  const wrong = rows.filter((r) => !r.inside).length;

  return (
    <section className="field field-bone" aria-labelledby="ch-record">
      <div className="shell py-[clamp(6rem,13vw,11rem)]">
        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_17rem]">
          <div>
            <h2 id="ch-record" className="chapter-title max-w-[17ch]">
              We were wrong <span className="num">{wrong}</span> of{" "}
              <span className="num">{rows.length}</span> weekends. Here they are.
            </h2>
            <p className="lede mt-8 max-w-[56ch]">
              Every Sunday night we seal the band we expect Monday to open inside. Every Monday the
              market grades it. Nobody else on this chain shows you the weekends they missed
              <a href="#note-8" className="fn text-accent" aria-label="Note 8">8</a>.
            </p>
          </div>
          <AssetSlot
            id="I3"
            className="hidden min-h-[15rem] lg:flex"
            brief="A stack of sealed record cards, one pulled slightly out of line."
            spec="3D still or loop · bone material, navy shadow · 4:5"
          />
        </div>

        {record.sample && (
          <p className="mt-[clamp(3rem,6vw,5rem)] flex items-start gap-3 rounded-[4px] bg-[color-mix(in_srgb,var(--warning)_12%,transparent)] px-4 py-3 text-[14px] leading-snug text-strong">
            <span className="mt-[3px] h-2.5 w-2.5 shrink-0 rotate-45 bg-warning" aria-hidden="true" />
            <span>
              <strong className="font-semibold">Sample rows.</strong> {record.note}
            </span>
          </p>
        )}

        <div className="mt-6 overflow-x-auto rounded-[4px] bg-panel shadow-[inset_0_0_0_1px_var(--rule)]">
          <table className="w-full border-collapse text-[13px] sm:text-[14px]">
            <caption className="sr-only">
              Sealed weekend bands for {record.token} and the Monday open that graded each one
            </caption>
            <thead>
              <tr className="text-right font-mono text-[10.5px] uppercase tracking-[0.1em] text-faint">
                <th scope="col" className="px-2.5 py-3 text-left font-medium sm:px-4">
                  <span className="sm:hidden">Open</span>
                  <span className="hidden sm:inline">Monday open</span>
                </th>
                <th scope="col" className="px-2.5 py-3 font-medium sm:px-4">
                  <span className="sm:hidden">Band</span>
                  <span className="hidden sm:inline">Band sealed Sunday</span>
                </th>
                <th scope="col" className="px-2.5 py-3 font-medium sm:px-4">
                  <span className="sm:hidden">{record.token}</span>
                  <span className="hidden sm:inline">{record.token} opened</span>
                </th>
                <th scope="col" className="px-2.5 py-3 text-left font-medium sm:px-4">Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.open} className={`h-10 border-t border-rule text-right ${r.inside ? "" : "bg-[color-mix(in_srgb,var(--ink)_5%,transparent)]"}`}>
                  <th scope="row" className="num whitespace-nowrap px-2.5 text-left font-medium text-strong sm:px-4">{day(r.open)}</th>
                  <td className="num px-2.5 text-accent sm:px-4">±{r.band.toFixed(1)}%</td>
                  <td className="num px-2.5 font-semibold text-strong sm:px-4">{signed(r.move)}</td>
                  <td className="px-2.5 text-left sm:px-4">
                    <span className="inline-flex items-center gap-2">
                      {r.inside ? (
                        <span className="h-2 w-2 rounded-full shadow-[inset_0_0_0_1.5px_var(--text-muted)]" aria-hidden="true" />
                      ) : (
                        <span className="h-2 w-2 bg-strong" aria-hidden="true" />
                      )}
                      <span className={r.inside ? "text-muted" : "font-semibold text-strong"}>
                        <span className="sm:hidden">{r.inside ? "Inside" : "Wrong"}</span>
                        <span className="hidden sm:inline">{r.inside ? "Inside the band" : "We were wrong"}</span>
                      </span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
