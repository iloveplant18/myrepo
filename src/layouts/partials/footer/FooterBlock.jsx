
function FooterBlock({children, title}) {
  return (
    <div className="footer__info-block info-block">
      <h3 className="info-block__title">{title}</h3>
      {children}
    </div>
  )
}

export default FooterBlock