import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetail({ showPopup }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data));
  }, [id]);

  const handleAdd = () => {
    dispatch(addToCart(product));
    showPopup(`${product.title} added to cart`);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <img src={product.image} alt={product.title} style={{ width: '200px' }} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;