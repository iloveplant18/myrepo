function RoundButton({ chips, href, children }) {
  return (
    <a className="controls__link" href={href}>
      {children}
      <span className="controls__link-count">
        {chips}
      </span>
    </a>
  );
}

export default RoundButton