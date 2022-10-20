const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
});

export function formatCurrency(value: number) {
  return currencyFormatter.format(value);
}
