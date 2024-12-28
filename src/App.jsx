import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CoursesIndex from "./pages/courses/Index.jsx";
import CoursesShow from './pages/courses/Show.jsx';
import Cart from "./pages/Cart.jsx";
import CartContext from "./contexts/CartContext.js";
import { isEqual } from "lodash";


function App() {
  const [cart, setCart] = useState([])

  const cartContextValue = {
    cart: cart,
    addItem: function (newItem) {
      if (cart.some((item) => isEqual(item, newItem))) return
      setCart([...cart, newItem])
    },
    removeItem: function (itemToRemove) {
      console.log('removing item')
      let newCart = this.cart.filter((item) => !isEqual(item, itemToRemove))
      setCart(newCart)
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <CartContext.Provider value={cartContextValue}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <CoursesIndex />
            }
          />
          <Route
            path={'courses/:id'}
            element={<CoursesShow />}
          />
          <Route
            path='/cart'
            element={<Cart />}
          />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App