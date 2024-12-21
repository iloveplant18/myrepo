function PrimaryButton({ type, children, href, onClick }) {
  return type === "link" ? (
    <a className="button button_shadow" href={href}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className="button button_shadow">{children}</button>
  );
}

export default PrimaryButton;
