function PrimaryButton({ className, type, children, href, onClick }) {
  const classes = "button button_shadow " + className

  return type === "link" ? (
    <a className={classes} href={href}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={classes}>{children}</button>
  );
}

export default PrimaryButton;
