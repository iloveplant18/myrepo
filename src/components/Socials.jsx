
const links = [
  {
    href: '#',
    subscription: 'Facebook',
    image: {
      src: 'images/socials/facebook.svg',
      width: 11,
      height: 14,
    }
  },
  {
    href: '#',
    subscription: 'X',
    image: {
      src: 'images/socials/x.svg',
      width: 16,
      height: 14,
    }
  },
  {
    href: '#',
    subscription: 'Whats App',
    image: {
      src: 'images/socials/whatsapp.svg',
      width: 14.6,
      height: 14,
    }
  },
  {
    href: '#',
    subscription: 'In',
    image: {
      src: 'images/socials/in.svg',
      width: 14.6,
      height: 14,
    }
  },
  {
    href: '#',
    subscription: 'Youtube',
    image: {
      src: 'images/socials/youtube.svg',
      width: 16,
      height: 14,
    }
  },
]

function Socials({ className }) {
  return (
    <ul className={"contact__socials socials " + className}>
      { links.map((link, index) =>
        <li className="socials__item" key={index}>
          <a className="socials__link" href={link.href}>
            <span className="visually-hidden">{link.subscription}</span>
            <img
              src={link.image.src}
              alt=""
              width={link.image.width}
              height={link.image.height}
              loading="lazy"
            />
          </a>
        </li>
      )}

    </ul>
  )
}

export default Socials