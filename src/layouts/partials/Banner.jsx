
function Banner({ title }) {
  return (
    <>
      <div className="page-info content-padding">
        <div className="page-info__inner container">
          <h1 className="page-info__title">{title}</h1>
          <ul className="page-info__bread bread">
            <li className="bread__item">
              <a className="bread__link link" href="#">
                Home
              </a>
            </li>
            <li className="bread__item">
              <a className="bread__link link" href="#">
                Courses
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Banner