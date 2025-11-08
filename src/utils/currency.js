export async function fetchConversionRate(from = 'USD', to = 'INR') {
  try {
    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();
    return data.rates[to];
  } catch {
    return null;
  }
}