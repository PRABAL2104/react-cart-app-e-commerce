import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { formatPrice } from '../utils/formatPrice';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [rate, setRate] = useState(88.74); // fallback INR rate

  useEffect(() => {
    axios.get('https://open.er-api.com/v6/latest/USD')
      .then(res => setRate(res.data.rates.INR))
      .catch(err => console.error('Rate fetch failed:', err));
  }, []);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '1rem 2rem', marginTop: 0 }}>
      {/* ✅ Cart Items */}
      {items.map(item => (
        <div key={item.id} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #ddd',
          padding: '1rem 0'
        }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
            <p style={{ margin: 0 }}>{formatPrice(item.price, 'INR', rate)}</p>
          </div>
          <input
            type="number"
            value={item.quantity}
            onChange={e => dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))}
            style={{
              width: '60px',
              marginRight: '1rem',
              padding: '0.25rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {/* ✅ Total Price */}
      <h3 style={{
        textAlign: 'right',
        marginTop: '2rem',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        Total: {formatPrice(total, 'INR', rate)}
      </h3>
    </div>
  );
}

export default Cart;