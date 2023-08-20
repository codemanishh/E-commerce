import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Cart from './pages/cart/Cart';
import Product from './pages/product/Product';
import Checkout from './pages/checkout/Checkout';
import Error from './pages/error/Error';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Home />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories/:category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:productId/checkout" element={<Checkout />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
