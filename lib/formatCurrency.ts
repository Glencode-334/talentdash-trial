export function formatCurrency(
  value: string,
  currency: string
) {

  const numericValue =
    Number(
      value
        .replace("₹", "")
        .replace("$", "")
        .replace("L", "")
        .replace("K", "")
        .replace("+", "")
    );

  /* INR FORMAT */

  if (currency === "inr") {

    return `₹${numericValue}L`;
  }

  /* USD FORMAT */

  const usdValue =
    Math.round(
      numericValue * 1.2
    );

  return `$${usdValue}K`;
}