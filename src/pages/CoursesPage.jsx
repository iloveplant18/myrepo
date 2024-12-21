import { useEffect, useState } from "react";
import CoursesContainer from "../components/courses/CoursesContainer.jsx";
import CoursesHeader from "../components/courses/CoursesHeader.jsx";
import Pagination from "../components/Pagination.jsx";
import Filters from "../components/filters/Filters.jsx";

function CoursesPage({ onCardClick }) {
  const [closures, setClosures] = useState([]);
  const [checkboxesValues, setCheckboxesValues] = useState({
    category: [],
    language: [],
    price: [],
    "skill-level": [],
    instructor: [],
    rating: [],
  });

  function updateFilters({ type, value }) {
    if (!checkboxesValues[type]) return false;
    let newCheckboxesValues = { ...checkboxesValues };
    if (newCheckboxesValues[type].indexOf(value) === -1) {
      newCheckboxesValues[type].push(value);
    } else {
      let valueIndex = newCheckboxesValues[type].indexOf(value);
      newCheckboxesValues[type].splice(valueIndex, 1);
    }
    setCheckboxesValues(newCheckboxesValues);
  }

  useEffect(() => {
    updateClosures(checkboxesValues);
  }, [checkboxesValues]);

  function updateClosures(filters) {
    let newClosures = [];
    for (let type in filters) {
      let value = filters[type];
      if (!value.length) continue;
      value = value.map((i) => String(i).trim().toLowerCase());
      switch (type) {
        case "category":
          newClosures.push(
            (cardProperties) =>
              value.indexOf(cardProperties.tag.trim().toLowerCase()) !== -1,
          );
          break;
        case "language":
          newClosures.push(
            (cardProperties) =>
              value.indexOf(cardProperties.language.trim().toLowerCase()) !==
              -1,
          );
          break;
        case "price":
          newClosures.push((cardProperties) => {
            let price = cardProperties.price.trim().toLowerCase();
            if (price === "free" && value.indexOf("free") !== -1) return true;
            if (price !== "free" && value.indexOf("paid") !== -1) return true;
            return false;
          });
          break;
        case "instructor":
          newClosures.push(
            (cardProperties) =>
              value.indexOf(cardProperties.instructor.trim().toLowerCase()) !==
              -1,
          );
          break;
        case "skill-level":
          newClosures.push(
            (cardProperties) =>
              value.indexOf(cardProperties.skillLevel.trim().toLowerCase()) !==
              -1,
          );
          break;
        case "rating":
          newClosures.push(
            (cardProperties) =>
              value.indexOf(cardProperties.mark.trim()[1]) !== -1,
          );
          break;
      }
    }

    setClosures(newClosures);
  }

  const [cardsCount, setCardsCount] = useState(0)

  const [cardsViewType, setCardsViewType] = useState('block')

  return (
    <div className="content content-padding">
      <div className="content__inner container">
        <aside className="aside">
          <h2 className="visually-hidden">Filters</h2>
          <Filters onCheckboxChange={updateFilters} />
        </aside>
        <main className="courses">
          <h2 className="visually-hidden">Courses</h2>
          <CoursesHeader cardsCount={cardsCount} cardsViewType={cardsViewType} setCardsViewType={setCardsViewType} />
          <CoursesContainer
            closures={closures}
            updateCardsCount={setCardsCount}
            onCardClick={onCardClick}
            cardsViewType={cardsViewType}
          />
          <Pagination links={["#", "#", "#", "#"]} />
        </main>
      </div>
    </div>
  );
}

export default CoursesPage;
