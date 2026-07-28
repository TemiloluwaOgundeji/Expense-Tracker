export function formatCurrency(
  amount: number,
  currency: "NGN" | "USD" | "EUR"
) {
  const locale =
    currency === "NGN"
      ? "en-NG"
      : currency === "USD"
      ? "en-US"
      : "de-DE";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}