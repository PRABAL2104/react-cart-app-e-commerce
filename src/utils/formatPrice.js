export const formatPrice = (price, currency = 'USD', rate = 88.74) => {
  if (typeof price !== 'number') return '';

  switch (currency) {
    case 'INR':
      return `₹${(price * rate).toFixed(2)}`;
    case 'USD':
    default:
      return `$${price.toFixed(2)}`;
  }
};