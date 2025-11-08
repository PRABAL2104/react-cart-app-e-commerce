import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function ProductCard({ product, showPopup }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showPopup(`${product.title} added to cart`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem' }}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} style={{ width: '100px' }} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;