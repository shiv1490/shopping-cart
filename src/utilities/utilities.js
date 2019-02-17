export const getFormattedCurrency = currency => {
  return `$${Number(currency).toFixed(2)}`;
};
