function Pagination({ links }) {
  return (
    <ul className="courses__pagination pagination row">
      {links.map((link, index) => (
        <li className="pagination__item" key={index}>
          <a className="pagination__button active" href={link}>
            {index + 1}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
