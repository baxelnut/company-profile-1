import { useEffect, useState, useCallback } from "react";
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
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY > lastScrollY && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentY);

      // auto-close menu when scrolling
      if (isMenuOpen) setIsMenuOpen(false);
    };

    // close menu if user clicks/touches outside
    const handleClickOutside = (e) => {
      if (
        isMenuOpen &&
        !e.target.closest(".menu-overlay") &&
        !e.target.closest(".burger")
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY, isMenuOpen]);

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

      {/* Desktop Menu */}
      <div className="menu-desktop">
        <MenuNav menu={menu} />
      </div>

      {/* Burger Icon */}
      <button
        className={`burger ${scrolled ? "scrolled" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>

      {/* Mobile Menu Overlay */}
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

      {/* Dim background when menu open */}
      {isMenuOpen && <div className="overlay-bg" onClick={toggleMenu} />}
    </header>
  );
}
