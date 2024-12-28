import { useEffect, useState } from "react";
import PrimaryButton from "./ui/PrimaryButton.jsx";
import { NavLink } from "react-router-dom";

function CourseCard(props) {
  const {
    info,
    onClick,
    type,
    id,
  } = props;

  let cardClass = "courses__card card"
  if (type === 'row') {
    cardClass += ' courses__card--row'
  }

  return (
    <article className={cardClass} >
      <NavLink
        className="card__link"
        to={`/courses/${id}`}
      ></NavLink>
      <span className="visually-hidden card__skill-level">{info.skillLevel}</span>
      <span className="visually-hidden card__language">{info.language}</span>
      <div>
        <img
          className="card__image"
          src={info.imageSrc}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="card__meta">
        <span className="card__tag">{info.tag}</span>
        <span className="card__mark">{info.mark}</span>
      </div>
      <h3 className="card__title">{info.name}</h3>
      <span className="card__author">{info.instructor}</span>
      <div className="card__footer">
        <PrimaryButton
          className="card__button"
          type='button'
          onClick={onClick}
        >
          Enroll Now
        </PrimaryButton>
        <span className="card__price-container">
          <span className="card__price">{info.price + (info.price === 'free' ? '' : '$')}</span>
        </span>
      </div>
    </article>
  );
}

export default CourseCard
