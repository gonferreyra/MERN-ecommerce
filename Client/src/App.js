import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css'
import { UserContext } from "./components/Context/UserContext"
import RouterApp from './router/RouterApp';

function App() {

  const cart = useSelector(state => state.shop.cart)
  // console.log(cart)

  useEffect(() => {
    localStorage.setItem('savedCart', JSON.stringify(cart))
  }, [cart])

  // navbar-aside
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Cart
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <UserContext.Provider value={{ isOpen, setIsOpen, toggle, cartIsOpen, setCartIsOpen, toggleCart }}>
      <RouterApp />
    </UserContext.Provider>
  );
}

export default App;
