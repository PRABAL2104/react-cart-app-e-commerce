import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Home({ showPopup }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(p => (
        <ProductCard key={p.id} product={p} showPopup={showPopup} />
      ))}
    </div>
  );
}

export default Home;