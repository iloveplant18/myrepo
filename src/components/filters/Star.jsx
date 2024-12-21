function Star({ isAlternative }) {
  let imageSource = isAlternative
    ? "/images/star-alternate.svg"
    : "/images/star.svg";

  return (
    <img
      className="filter__star"
      src={imageSource}
      alt=""
      width="18"
      height="16"
      loading="lazy"
    />
  );
}

export default Star;
