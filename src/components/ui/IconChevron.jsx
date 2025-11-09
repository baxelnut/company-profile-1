// Style
import "./IconChevron.css";
// Data
import { SVG_PATHS } from "../../data/utilsData";

const directionMap = {
  up: "chevronUp",
  down: "chevronDown",
  left: "chevronLeft",
  right: "chevronRight",
};

export default function IconChevron({
  direction = "right",
  size = 14,
  fill = "var(--text)",
  className = "",
}) {
  const pathKey = directionMap[direction] || "chevronRight";
  const d = SVG_PATHS[pathKey];

  if (!d) {
    console.error(`IconChevron: Invalid direction "${direction}"`);
    return null;
  }

  return (
    <svg
      className={`chevron-icon ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill={fill}
      viewBox="0 0 16 16"
    >
      <path fillRule="evenodd" d={d} />
    </svg>
  );
}
