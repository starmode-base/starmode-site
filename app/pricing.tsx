import { CheckIcon } from "@heroicons/react/20/solid";

/**
 * Takes a number and returns a string with thousand separators.
 */
function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

function Value(props: { amount: number; template: string; disabled: boolean }) {
  const parts = props.template.split("{amount}");

  return (
    <>
      {parts[0]}
      <span
        className={
          "line-through " +
          (props.disabled ? "" : "text-hollywood-500 font-semibold")
        }
      >
        ${formatNumber(props.amount)}
      </span>
      {parts[1]}
    </>
  );
}

export function Tier(
  props: Readonly<{
    name: string;
    monthlyPrice: number;
    contractTerm: 1 | 12 | 60;
    discount: number;
    features: { name: string; highlight?: true }[];
    highlight?: boolean;
    valueOverride?: number;
    /** The link to follow when the user clicks the CTA button. If not provided, the button will be disabled. */
    paymentLink?: string;
    hideDiscount?: boolean;
    valueStr?: string;
  }>,
) {
  const disabled = typeof props.paymentLink !== "string";

  const monthlyPriceWithDiscount =
    props.monthlyPrice * (1 - props.discount / 100);

  const amountToPay = monthlyPriceWithDiscount * props.contractTerm;

  const billed =
    props.contractTerm === 60
      ? "Billed once for 5 years"
      : props.contractTerm === 12
        ? "Billed annually"
        : "Billed monthly";

  const totalPriceWithoutDiscount =
    props.valueOverride ?? props.monthlyPrice * props.contractTerm;

  const discount = Math.round(
    (1 - amountToPay / totalPriceWithoutDiscount) * 100,
  );

  const discountElement =
    props.hideDiscount || discount === 0 ? null : (
      <>Annual discount {discount}%</>
    );

  return (
    <div
      className={
        "flex flex-col gap-8 rounded-xl border bg-white px-8 py-10 text-sm sm:rounded-3xl " +
        (props.highlight ? "border-hollywood-500 border-2" : "border-slate-200")
      }
    >
      <div className="text-lg font-semibold">{props.name}</div>
      <div className="flex items-center gap-2">
        <div className="text-4xl font-bold">
          ${formatNumber(monthlyPriceWithDiscount)}
        </div>
        <div>
          <div className="text-slate-600">USD per month</div>
          <div className="text-slate-500">{billed}</div>
        </div>
      </div>
      <ul role="list" className="flex flex-col gap-4 text-slate-600">
        {props.features.map((e) => (
          <li key={e.name} className="flex gap-3">
            <CheckIcon className="size-5" />
            <span className={e.highlight ? "font-semibold" : ""}>{e.name}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex grow flex-col justify-end gap-2">
        <div className="text-center text-slate-500 italic">
          {discountElement}
        </div>
        <button
          className="bg-hollywood-500 hover:bg-hollywood-600 rounded-lg px-5 py-3 font-semibold text-white transition-colors enabled:text-base disabled:bg-slate-100 disabled:text-slate-600"
          disabled={disabled}
          aria-disabled={disabled}
          onClick={() => {
            if (disabled) return;
            window.open(props.paymentLink, "_blank");
          }}
        >
          {disabled ? (
            <>Pay ${formatNumber(amountToPay)} (coming soon)</>
          ) : (
            <>Pay ${formatNumber(amountToPay)}</>
          )}
        </button>
        <div className="text-center text-slate-500">
          {props.monthlyPrice === totalPriceWithoutDiscount ? (
            <>Pay as you go</>
          ) : (
            <Value
              disabled={disabled}
              amount={totalPriceWithoutDiscount}
              template={props.valueStr ?? "Regular price {amount}"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function Pricing(props: { isAnnual: boolean }) {
  return (
    <>
      <Tier
        name="Solo"
        monthlyPrice={36}
        contractTerm={props.isAnnual ? 12 : 1}
        discount={props.isAnnual ? 50 : 0}
        features={[
          { name: "1 user" },
          { name: "Humanless AI-first bookkeeping service" },
          { name: "Realtime categorization" },
          { name: "Automatic bank reconciliation" },
          { name: "Anomaly & fraud detection" },
          { name: "Discord server access" },
        ]}
      />
      <Tier
        name="Early Adopter (pre-order)"
        monthlyPrice={16}
        contractTerm={60}
        discount={0}
        valueOverride={98 * 60}
        features={[
          { name: "10 users", highlight: true },
          { name: "Humanless AI-first bookkeeping service" },
          { name: "Realtime categorization" },
          { name: "Automatic bank reconciliation" },
          { name: "Anomaly & fraud detection" },
          { name: "Discord server access" },
          { name: "Realtime collaboration", highlight: true },
          { name: "Account recovery", highlight: true },
          { name: "Free video call with the founders", highlight: true },
          { name: "Early access to new features", highlight: true },
        ]}
        highlight
        // Test:
        // paymentLink="https://buy.stripe.com/test_4gwcQk8nq3Kz5Xi5kk"
        // Live:
        paymentLink="https://buy.stripe.com/bIY4isaT17Qg6QMbII"
        hideDiscount
        valueStr="{amount} value"
      />
      <Tier
        name="Business"
        monthlyPrice={98}
        contractTerm={props.isAnnual ? 12 : 1}
        discount={props.isAnnual ? 50 : 0}
        features={[
          { name: "10 users", highlight: true },
          { name: "Humanless AI-first bookkeeping service" },
          { name: "Realtime categorization" },
          { name: "Automatic bank reconciliation" },
          { name: "Anomaly & fraud detection" },
          { name: "Discord server access" },
          { name: "Realtime collaboration", highlight: true },
          { name: "Account recovery", highlight: true },
        ]}
      />
    </>
  );
}
