import AppLayout from "../layouts/AppLayout.jsx";
import { useContext } from "react";
import CartContext from "../contexts/CartContext.js";
import CourseCard from "../components/CourseCard.jsx";

function Cart() {
  const cart = useContext(CartContext)

  return (
    <AppLayout bannerText="Cart">
      <section className="content-padding">
        <div className="courses__grid container cart">
          {
            cart.cart.map((item, index) =>
              <CourseCard
                info={item}
                id={index}
                onClick={() => cart.removeItem(item)}
                type={'block'}
                key={index}
              />
            )
          }
        </div>
      </section>
    </AppLayout>
  )
}

export default Cart