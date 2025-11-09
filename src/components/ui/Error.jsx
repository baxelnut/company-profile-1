// Style
import "./Error.css";
// Components
import Icon from "./Icon";
// Data
import { SVG_PATHS } from "../../data/utilsData";

export default function Error({
  className = "error-container",
  message,
  backgroundColor,
}) {
  const displayMessage = message?.trim() ? message : "Something went wrong!";

  return (
    <div
      className={className}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div className="error-icon">
        <Icon path={SVG_PATHS.error} size={22} fill="var(--danger)" />
      </div>
      <p className="error-message">{displayMessage}</p>
    </div>
  );
}
