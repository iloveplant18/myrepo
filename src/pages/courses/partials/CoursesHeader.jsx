
function CoursesHeader({ cardsCount, cardsViewType, setCardsViewType }) {

  let isRowCardStyleChecked = {
    checked: cardsViewType === "row"
  };
  let isBlockCardStyleChecked = {
    checked: cardsViewType === "block"
  };

  return (
    <header className="courses__header">
      <span>Showing {cardsCount} total results</span>
      <div className="courses__controls row">
        <div>
          Sort By:
          <select
            className="courses__select select"
            name=""
            id=""
            form="courses-form"
          >
            <option value="most-popular">Most Popular</option>
            <option value="most-popular">Less Popular</option>
          </select>
        </div>
        <label className="courses__option-button option-button">
          <svg
            width="18.000000"
            height="18.000000"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip1_1124">
                <rect
                  id="SVG"
                  rx="0.000000"
                  width="17.000000"
                  height="17.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip1_1124)">
              <path
                d="M2 1C1.44 1 1 1.44 1 2L1 6C1 6.55 1.44 7 2 7L6 7C6.55 7 7 6.55 7 6L7 2C7 1.44 6.55 1 6 1L2 1Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
              <path
                d="M12 1C11.44 1 11 1.44 11 2L11 6C11 6.55 11.44 7 12 7L16 7C16.55 7 17 6.55 17 6L17 2C17 1.44 16.55 1 16 1L12 1Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
              <path
                d="M2 11C1.44 11 1 11.44 1 12L1 16C1 16.55 1.44 17 2 17L6 17C6.55 17 7 16.55 7 16L7 12C7 11.44 6.55 11 6 11L2 11Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
              <path
                d="M12 11C11.44 11 11 11.44 11 12L11 16C11 16.55 11.44 17 12 17L16 17C16.55 17 17 16.55 17 16L17 12C17 11.44 16.55 11 16 11L12 11Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="2.000000"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <input
            className="visually-hidden"
            id="courses-type-1"
            name="courses-type"
            type="radio"
            hidden
            form="courses-form"
            checked={cardsViewType === "block"}
            onChange={() => setCardsViewType("block")}
          />
        </label>
        <label className="courses__option-button option-button">
          <svg
            width="19.000000"
            height="15.000000"
            viewBox="0 0 19 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <clipPath id="clip1_1130">
                <rect
                  id="SVG"
                  rx="0.000000"
                  width="18.000000"
                  height="14.000000"
                  transform="translate(0.500000 0.500000)"
                  fill="white"
                  fillOpacity="0"
                />
              </clipPath>
            </defs>
            <g clipPath="url(#clip1_1130)">
              <path
                id="Vector"
                d="M1.5 6C0.67 6 0 6.67 0 7.5C0 8.32 0.67 9 1.5 9C2.32 9 3 8.32 3 7.5C3 6.67 2.32 6 1.5 6ZM1.5 0C0.67 0 0 0.67 0 1.5C0 2.32 0.67 3 1.5 3C2.32 3 3 2.32 3 1.5C3 0.67 2.32 0 1.5 0ZM1.5 12C0.67 12 0 12.68 0 13.5C0 14.31 0.67 15 1.5 15C2.32 15 3 14.31 3 13.5C3 12.68 2.32 12 1.5 12ZM5.5 14.5L17.5 14.5C18.04 14.5 18.5 14.05 18.5 13.5C18.5 12.95 18.04 12.5 17.5 12.5L5.5 12.5C4.95 12.5 4.5 12.95 4.5 13.5C4.5 14.05 4.95 14.5 5.5 14.5ZM5.5 8.5L17.5 8.5C18.04 8.5 18.5 8.05 18.5 7.5C18.5 6.94 18.04 6.5 17.5 6.5L5.5 6.5C4.95 6.5 4.5 6.94 4.5 7.5C4.5 8.05 4.95 8.5 5.5 8.5ZM4.5 1.5C4.5 2.05 4.95 2.5 5.5 2.5L17.5 2.5C18.04 2.5 18.5 2.05 18.5 1.5C18.5 0.94 18.04 0.5 17.5 0.5L5.5 0.5C4.95 0.5 4.5 0.94 4.5 1.5Z"
                fill="#5751E1"
                fillOpacity="1.000000"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <input
            id="courses-type-2"
            name="courses-type"
            type="radio"
            form="courses-form"
            hidden
            checked={cardsViewType === "row"}
            onChange={() => setCardsViewType("row")}
          />
        </label>
      </div>
    </header>
  );
}

export default CoursesHeader;
