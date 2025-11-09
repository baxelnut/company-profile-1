import { Link, useLocation } from "react-router-dom";
// Style
import "./Breadcrumbs.css";
// Components
import IconChevron from "../ui/IconChevron";

export default function Breadcrumbs({ labelOverrides = {} }) {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const buildPath = (i) => "/" + segments.slice(0, i + 1).join("/");

  const formatLabel = (segment) =>
    labelOverrides[segment] ||
    segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const crumbs = [
    { label: "Dashboard", path: "/" },
    ...segments.map((seg, i) => ({
      label: formatLabel(seg),
      path: i === segments.length - 1 ? null : buildPath(i),
    })),
  ];

  return (
    <nav className="breadcrumbs">
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="breadcrumb-item">
            {!isLast && c.path ? (
              <Link to={c.path} className="breadcrumb-link">
                {c.label}
              </Link>
            ) : (
              <span className="breadcrumb-current">{c.label}</span>
            )}
            {!isLast && (
              <IconChevron
                className="breadcrumb-separator"
                direction="right"
                size={12}
              />
            )}
          </span>
        );
      })}
    </nav>
  );
}
