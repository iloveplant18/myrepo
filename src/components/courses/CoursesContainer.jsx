import CourseCard from "../CourseCard.jsx";
import { useEffect, useState } from "react";


const cardsInfo = [
  {
    name: "Learning js",
    price: "free",
    language: "arabic",
    skillLevel: "beginner",
    instructor: "Jenny Wilson",
    tag: "Development",
    mark: "(3.8 reviews)",
    imageSrc: "./files/courses-previews/1.png"
  },
  {
    name: "Learning php",
    price: "15",
    language: "english",
    skillLevel: "beginner",
    instructor: "Wade Warren",
    tag: "Development",
    mark: "(4.8 reviews)",
    imageSrc: "/files/courses-previews/4.png"
  },
  {
    name: "Learning python",
    price: "15",
    language: "spanish",
    skillLevel: "intermediate",
    instructor: "Jenny Wilson",
    tag: "Design",
    mark: "(4.8 reviews)",
    imageSrc: "/files/courses-previews/2.png"
  },
  {
    name: "Learning ruby",
    price: "15",
    language: "arabic",
    skillLevel: "high",
    instructor: "Jenny Wilson",
    tag: "Business",
    mark: "(3.8 reviews)",
    imageSrc: "/files/courses-previews/3.png"
  }
];

function CoursesContainer({closures, updateCardsCount, onCardClick, cardsViewType }) {
  const [cardsToRender, setCardsToRender] = useState([])

  useEffect(() => {
    let cardsCount = 0
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
          onClick={onCardClick}
          name={card.name}
          price={card.price}
          language={card.language}
          skillLevel={card.skillLevel}
          instructor={card.instructor}
          tag={card.tag}
          mark={card.mark}
          imageSrc={card.imageSrc}
          key={index}
          type={cardsViewType}
        />
      )}
    </div>

  )
}

export default CoursesContainer