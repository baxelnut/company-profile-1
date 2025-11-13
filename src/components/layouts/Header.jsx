import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
// Style
import "./Header.css";
// Components
import MenuNav from "./MenuNav";
// Context
import { useCompany } from "../../context/CompanyContext";

export default function Header({ menu }) {
  const { company, status } = useCompany();

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // hide if scrolling down, show if scrolling up
      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentY > 50);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(".menu-overlay") &&
        !e.target.closest(".burger")
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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

      <div className="menu-desktop">
        <MenuNav menu={menu} />
      </div>

      <button
        className={`burger ${scrolled ? "scrolled" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
        <button className="close" onClick={toggleMenu}>
          ✕
        </button>
        <MenuNav
          menu={menu}
          isMenuOpen={isMenuOpen}
          setMenuOpen={setIsMenuOpen}
        />
      </div>

      {isMenuOpen && <div className="overlay-bg" onClick={toggleMenu} />}
    </header>
  );
}
