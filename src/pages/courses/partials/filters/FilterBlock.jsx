import { useState } from "react";

const defaultVisibleChildsCount = 2

function FilterBlock({ children, title }) {
  const [maxChildsCount, setMaxChildsCount] = useState(defaultVisibleChildsCount);

  function toggleMaxChildCount() {
    if (checkIsChildsExpanded()) {
      setMaxChildsCount(defaultVisibleChildsCount)
      return
    }
    setMaxChildsCount(children.length)
  }

  function checkIsChildsExpanded() {
    return maxChildsCount > defaultVisibleChildsCount
  }

  function checkIsEnoughChildsToExpand() {
    return children.length > defaultVisibleChildsCount
  }

  return (
    <div className="aside__filter filter">
      <h3 className="filter__title">{title}</h3>
      <div className="filter__items-list">
        {children.filter((child, index) => index < maxChildsCount)}
        {checkIsEnoughChildsToExpand() &&
        <button className="filter__show-more" type="button" onClick={toggleMaxChildCount}>
          {checkIsChildsExpanded() ? 'Hide' : 'Show more +'}
        </button>}
      </div>
    </div>
  );
}

export default FilterBlock;
