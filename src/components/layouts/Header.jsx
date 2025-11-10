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

  useEffect(() => {
    const handleScrollColor = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollColor);
    return () => window.removeEventListener("scroll", handleScrollColor);
  }, []);

  if (status != "ready") return null;

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
