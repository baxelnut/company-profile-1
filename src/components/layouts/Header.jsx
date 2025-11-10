import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// Style
import "./Header.css";
// Components
import MenuNav from "./MenuNav";
// Context
import { useCompany } from "../../context/CompanyContext";

export default function Header({ menu }) {
  const { company, status } = useCompany();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      // hide when scrolling down, show when scrolling up
      if (currentY > lastScrollY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  if (status !== "ready") return null;

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      <Link to="/" className="logo">
        <img
          src={scrolled ? company.meta.logo.pngWhite : company.meta.logo.png}
          alt={company.meta.logo.alt}
        />
        <h5>{company.meta.name}</h5>
      </Link>
      <MenuNav menu={menu} />
    </header>
  );
}
