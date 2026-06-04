export function formatCurrency(
  amount: number,
  currency: "INR" | "USD"
) {

  return new Intl.NumberFormat(
    currency === "INR"
      ? "en-IN"
      : "en-US",

    {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }
  ).format(amount);
}