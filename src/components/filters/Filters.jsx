import FilterBlock from "./FilterBlock.jsx";
import FiltersCheckbox from "./FiltersCheckbox.jsx";
import Star from "./Star.jsx";


const filters = [
  {
    type: "category",
    title: "Category",
    checkboxes: [
      { title: "Art & design", value: "design" },
      { title: "Business", value: "business" },
      { title: "Data science", value: "data science" },
      { title: "Development", value: "development" },
      { title: "Finances", value: "finance" },
      { title: "health & fitness", value: "health & fitness" },
      { title: "Lifestyle", value: "lifestyle" },
    ],
  },
  {
    type: "language",
    title: "Language",
    checkboxes: [
      { title: "Arabic", value: "arabic" },
      { title: "English", value: "english" },
      { title: "Spanish", value: "spanish" },
    ],
  },
  {
    type: "price",
    title: "Pricing",
    checkboxes: [
      { title: "Free", value: "free" },
      { title: "Paid", value: "paid" },
    ],
  },
  {
    type: "skill-level",
    title: "Skill level",
    checkboxes: [
      { title: "Beginner", value: "beginner" },
      { title: "Intermediate", value: "intermediate" },
      { title: "High", value: "high" },
    ],
  },
];

// [0,0,0,0,0],
// [0,0,0,0,1],
// [0,0,0,1,1],
// [0,0,1,1,1],
// [0,1,1,1,1],
const ratingFilters = [];

for (let i = 0; i < 5; i++) {
  let row = [];
  ratingFilters.push(row);
  for (let j = 5; j > 0; j--) {
    row.push(j <= i);
  }
}


function Filters({onCheckboxChange}) {
  return (
    <form className="aside__form" id="courses-form">
      {filters.map((block, index) => (
        <FilterBlock title={block.title} key={index}>
          {block.checkboxes.map((checkbox, index) => (
            <FiltersCheckbox
              label={checkbox.title}
              value={checkbox.value}
              name={block.type}
              onChange={() =>
                onCheckboxChange({ type: block.type, value: checkbox.value })
              }
              key={index}
            />
          ))}
        </FilterBlock>
      ))}
      <FilterBlock title="Rating">
        {ratingFilters.map((starArray, index) => {
          let checkboxValue = ratingFilters.length - index;
          return (
            <FiltersCheckbox
              name="rating"
              value={checkboxValue}
              onChange={() =>
                onCheckboxChange({ type: "rating", value: checkboxValue })
              }
              key={index}
            >
                    <span className="filter__caption filter__caption_row">
                      {starArray.map((isAlternative, index) => (
                        <Star isAlternative={isAlternative} key={index} />
                      ))}
                    </span>
            </FiltersCheckbox>
          );
        })}
      </FilterBlock>
    </form>
  )
}

export default Filters