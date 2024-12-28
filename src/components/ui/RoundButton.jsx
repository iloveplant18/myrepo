import { Link } from "react-router-dom";

function RoundButton({ chips, href, children }) {
  return (
    <Link className="controls__link" to={href}>
      {children}
      <span className="controls__link-count">
        {chips}
      </span>
    </Link>
  );
}

export default RoundButton