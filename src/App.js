import React, { useEffect, useState } from "react";
import { Products, Navbar, Banner, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState[{}];

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveCart = async (productId) => {
    const {cart} await commerce.cart.remove(productId)
    setCart(cart)
  }
  // componentDidMount Equivalent
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(products);
  console.log(cart);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Router exact path="/">
            <Banner />
            <Products products={products} onAddToCart={handleAddToCart} />
          </Router>
          <Router exact path="/cart">
            <Cart cart={cart} />
          </Router>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
