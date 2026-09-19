import type { Metadata } from "next";
import { Entry, PlainPage } from "../components/PlainPage";

export const metadata: Metadata = {
  title: "Risk disclosure — Tapehouse",
  description: "What can go wrong when you borrow against Stock Tokens with Tapehouse.",
};

export default function Risk() {
  return (
    <PlainPage title="Read this before you borrow" lede="Plainly, and in full: what Tapehouse is, and what can go wrong.">
      <Entry heading="What Tapehouse is">
        <p>
          Tapehouse is a smart-contract protocol. It is not a broker, a bank or a regulated financial
          services provider. Nothing on this site is investment, legal or tax advice, and nothing here is
          an offer of credit. Tapehouse currently runs on a test network, where assets have no value.
        </p>
      </Entry>
      <Entry heading="What a Stock Token is">
        <p>
          Stock Tokens are tokenised securities issued by a third party. They give economic exposure to an
          underlying share or fund; they are not the share itself. They carry risks that owning shares
          directly does not: loss or compromise of your keys, limited redemption, thin liquidity, prices
          that diverge from the underlying share, and regulation that is uncertain and still changing.
        </p>
      </Entry>
      <Entry heading="What borrowing can cost you">
        <p>
          Borrowing against a portfolio can lose you part or all of it. If the value of your holdings falls
          far enough, some of them will be sold to repay the loan, and that can happen while the
          underlying market is closed.
        </p>
      </Entry>
      <Entry heading="What can fail">
        <p>
          A published band is an estimate, and it is sometimes wrong; that is why we publish the record.
          Price sources can fail, smart contracts can contain errors, and a network can halt.
        </p>
      </Entry>
      <Entry heading="Where it is available">
        <p>Tapehouse may not be available where you live. Check before you use it.</p>
      </Entry>
    </PlainPage>
  );
}
