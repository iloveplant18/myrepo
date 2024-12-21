import Socials from "./Socials.jsx";
import Select from "./ui/Select.jsx";
import Option from "./ui/Option.jsx";
import RoundButton from "./ui/RoundButton.jsx";
import DefaultButton from "./ui/DefaultButton.jsx";

const navigationLinks = [
  {
    href: '#',
    name: 'Home',
  },
  {
    href: '#',
    name: 'Courses',
  },
  {
    href: '#',
    name: 'Pages',
  },
  {
    href: '#',
    name: 'Shop',
  },
  {
    href: '#',
    name: 'Blog',
  },
]

function Header({ cartCount }) {
  return (
    <header className="header">
      <div className="header__contact contact content-padding">
        <div className="contact__inner container container_big">
          <div className="contact__part">
            <address className="contact__address">
              589 5th Ave, NY 10024, USA
            </address>
            <address className="contact__email">info@skillgrodemo.com</address>
          </div>
          <div className="contact__part">
            <address className="contact__phone">Call us: +123 599 8989</address>
            <span className="contact__socials-caption">Follow Us On:</span>
            <Socials />
          </div>
        </div>
      </div>
      <div className="header__controls controls content-padding">
        <div className="controls__inner container container_big">
          <div className="controls__first-part">
            <a href="#" className="controls__logo-container">
              <img
                className="controls__logo"
                src="/images/logo.png"
                alt=""
                width="153"
                height="38"
                loading="lazy"
              />
            </a>
            <nav className="controls__navigation navigation">
              <ul className="navigation__list">
                {navigationLinks.map((link, index) => (
                  <li className="navigation__item" key={index}>
                    <a className="navigation__link link" href={link.href}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="controls__second-part">
            <form className="controls__categories-search categories-search">
              <Select
                className={"categories-search__categories"}
                title={"Categories"}
              >
                <Option value={"design"} title={"art & design"} />
              </Select>
              <input
                className="categories-search__input"
                type="text"
                id="search"
                name="search"
                placeholder="Search For Course . . ."
              />
              <button className="categories-search__submit">
                <span className="visually-hidden card__language">search</span>
                <img
                  className="categories-search__submit-image"
                  src="/images/loop.svg"
                  alt=""
                  width="24"
                  height="23"
                  loading="lazy"
                />
              </button>
            </form>
            <div className="controls__links">
              <RoundButton chips='0' href='#'>
                <img
                  className="controls__link-image"
                  src="/images/heart.svg"
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </RoundButton>
              <RoundButton chips={cartCount} href='#'>
                <img
                  className="controls__link-image"
                  src="/images/cart.svg"
                  alt=""
                  width="40"
                  height="40"
                  loading="lazy"
                />
              </RoundButton>
            </div>
            <DefaultButton className={'controls__login'} type={'link'}>
              Log In
            </DefaultButton>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header