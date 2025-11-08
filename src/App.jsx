import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [popupMessage, setPopupMessage] = useState('');

  const showPopup = (message) => {
    setPopupMessage(message);
    setTimeout(() => setPopupMessage(''), 2000);
  };

  return (
    <BrowserRouter>
      <Navbar />

      {/* ✅ Global Popup */}
    {popupMessage && (
  <div style={{
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '0.75rem 1.25rem',
    borderRadius: '6px',
    fontWeight: 'bold',
    zIndex: 999,
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
    transition: 'opacity 0.3s ease-in-out'
  }}>
    {popupMessage}
  </div>
)}
      <Routes>
        <Route path="/" element={<Home showPopup={showPopup} />} />
        <Route path="/product/:id" element={<ProductDetail showPopup={showPopup} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;