// Style
import "./fadeIn.css";
// Hook
import useInView from "../../hooks/useInView";

export default function FadeInOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up", // or "left", "right", "down"
}) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`fade-in ${direction} ${
        isVisible ? "visible" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
