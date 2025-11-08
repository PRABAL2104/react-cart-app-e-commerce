import { Link } from 'react-router-dom';

function Navbar() {
  const linkStyle = {
    marginRight: '1rem',
    color: 'blue',
    textDecoration: 'under',
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee' }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/cart" style={linkStyle}>Cart</Link>
    </nav>
  );
}

export default Navbar;