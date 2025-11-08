# 🛒 React E-Commerce Cart App

A modern e-commerce frontend built with **React**, **Redux Toolkit**, and **Vite**, featuring:

- Product listing with API integration
- Add to Cart with global popup notification
- Cart page with quantity update, remove, and total calculation
- Live USD → INR currency conversion
- Clean, responsive UI with professional UX

---

## 🚀 Features

- 🛍️ **Product Listing**: Fetched from [FakeStoreAPI](https://fakestoreapi.com/)
- 🛒 **Cart Management**: Add, remove, and update quantity using Redux
- 🔔 **Global Popup**: Top-right toast-style notification on "Add to Cart"
- 💰 **Currency Conversion**: Live USD to INR using [ExchangeRate API](https://www.exchangerate-api.com/)
- 🎨 **Responsive UI**: Clean layout with consistent styling
- ⚙️ **Vite Dev Server**: Runs on `http://localhost:3000/`

---

## 📁 Folder Structure
src/ ├── components/ │   └── Navbar.jsx │   └── ProductCard.jsx ├── pages/ │   └── Home.jsx │   └── ProductDetail.jsx │   └── Cart.jsx ├── redux/ │   └── cartSlice.js │   └── store.js ├── utils/ │   └── formatPrice.js ├── App.jsx ├── main.jsx └── index.css

---

## 🧪 Getting Started

1. Clone the repo

git clone https://github.com/your-username/react-cart-app.git
cd react-cart-app

2. Install dependencies 

npm install

3. Start the dev server

npm run dev