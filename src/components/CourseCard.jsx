import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton.jsx";

function CourseCard(props) {
  const {
    onClick,
    name,
    price,
    language,
    skillLevel,
    instructor,
    tag,
    mark,
    imageSrc,
    type
  } = props;

  let cardClass = "courses__card card"
  if (type === 'row') {
    cardClass += ' courses__card--row'
  }

  return (
    <article className={cardClass} >
      <span className="visually-hidden card__skill-level">{skillLevel}</span>
      <span className="visually-hidden card__language">{language}</span>
      <div>
        <img
          className="card__image"
          src={imageSrc}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="card__meta">
        <span className="card__tag">{tag}</span>
        <span className="card__mark">{mark}</span>
      </div>
      <h3 className="card__title">{name}</h3>
      <span className="card__author">{instructor}</span>
      <div className="card__footer">
        <PrimaryButton onClick={onClick} type='button' href='#'>
          Enroll Now
        </PrimaryButton>
        <span className="card__price-container">
          <span className="card__price">{price + (price === 'free' ? '' : '$')}</span>
        </span>
      </div>
    </article>
  );
}

export default CourseCard
