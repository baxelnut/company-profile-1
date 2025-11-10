import { useEffect, useState } from "react";
// Style
import "./MenuNav.css";

export default function MenuNav({ menu }) {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      for (const [label, target] of Object.entries(menu)) {
        const section = document.getElementById(target);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.25 && rect.bottom >= 100) {
            current = target;
            break;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menu]);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="menu">
      {Object.entries(menu).map(([label, target], index, arr) => (
        <div key={label} className="menu-wrapper">
          <div
            onClick={() => handleScrollTo(target)}
            className={`menu-item ${active === target ? "active" : ""}`}
          >
            <p>{label}</p>
          </div>
          {index < arr.length - 1 && <span className="menu-separator">•</span>}
        </div>
      ))}
    </nav>
  );
}
