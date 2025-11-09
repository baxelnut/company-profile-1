// Style
import "./Loading.css";
// Components
import FadeInOnScroll from "../utils/FadeInOnScroll";

export default function Loading({
  backgroundColor = "transparent",
  message = "Please wait...",
  noMsg = false,
}) {
  return (
    <div className="loading-container" style={{ backgroundColor }}>
      <div className="spinner"></div>
      {!noMsg && (
        <FadeInOnScroll>
          <p>{message}</p>
        </FadeInOnScroll>
      )}
    </div>
  );
}
