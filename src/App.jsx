import { Routes, Route } from 'react-router';
import './App.css'
import { HomePage } from './pages/home/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import { OrderPage } from './pages/orders/OrderPage';
import { TrackingPage } from './pages/TrackingPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getAppData = async () => {
      const response = await axios.get('/api/cart-items?expand=product')
      setCart(response.data);
    }
    getAppData();
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrderPage cart={cart} />} />
      <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
