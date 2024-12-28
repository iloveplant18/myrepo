import CourseCard from "../../../components/CourseCard.jsx";
import { useContext, useEffect, useState } from "react";
import cardsInfo from '../../../assets/js/courses.js'
import CartContext from "../../../contexts/CartContext.js";


function CoursesContainer({closures, updateCardsCount, cardsViewType }) {
  const cartContext = useContext(CartContext)

  const [cardsToRender, setCardsToRender] = useState([])

  useEffect(() => {
    let newCardsToRender = cardsInfo.filter(card => {
      return checkIsAllClosuresReturnsTrue(closures, card)
    })
    setCardsToRender(newCardsToRender)
    updateCardsCount(newCardsToRender.length)
  }, [closures])

  function checkIsAllClosuresReturnsTrue(closures, card) {
    for (let i of closures) {
      if (!i(card)) return false;
    }
    return true;
  }

  return (
    <div className={cardsViewType === 'block' ? "courses__grid" : 'courses__flex'}>
      {cardsToRender.map((card, index) =>
        <CourseCard
          info={card}
          onClick={() => cartContext.addItem(card)}
          type={cardsViewType}
          id={index}
          key={index}
        />
      )}
    </div>
  )
}

export default CoursesContainer