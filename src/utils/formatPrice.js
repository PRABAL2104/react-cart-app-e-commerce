export const formatPrice = (price, currency = 'USD', rate) => {
  if (typeof price !== 'number' || !rate) return '';

  switch (currency) {
    case 'INR':
      return `₹${(price * rate).toFixed(2)}`;
    case 'USD':
      return `$${price.toFixed(2)}`;
    default:
      return `${currency} ${(price * rate).toFixed(2)}`;
  }
};