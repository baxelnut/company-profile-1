import { Link } from "react-router-dom";
// Style
import "./Footer.css";
// Components
import Button from "../ui/Button";
import Input from "../ui/Input";
import MenuNav from "./MenuNav";
// Context
import { useCompany } from "../../context/CompanyContext";
// Data
import { SVG_PATHS } from "../../data/utilsData";

export default function Footer({ menu }) {
  const { company, status } = useCompany();

  if (status !== "ready" || !company) return null;

  const { meta, contact } = company;
  const socials = contact?.social || {};

  const LEGAL_LINKS = [
    { to: "/policy-privacy", label: "Policy Privacy" },
    { to: "/terms-conditions", label: "Terms & Conditions" },
    { to: "/support", label: "Support" },
  ];

  return (
    <footer id="footer">
      <div className="card contact">
        {/* Lead Section */}
        <div className="lead">
          <div className="tagline-container">
            <h1>{meta?.tagline || "Your trusted digital partner"}</h1>
            <MenuNav menu={menu} />
          </div>

          <div className="newsletter-container">
            <h6>Subscribe to our newsletter</h6>
            <form
              className="newsletter-input"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input type="email" placeholder="Enter your email" fullWidth />
              <Button
                iconPath={SVG_PATHS.chevronRight}
                iconSize={22}
                type="submit"
              />
            </form>
          </div>
        </div>

        {/* Socials + Legal */}
        <div className="socials-container">
          {Object.keys(socials).length > 0 && (
            <div className="social-media-links">
              {Object.entries(socials).map(([name, url]) =>
                url ? (
                  <Button
                    key={name}
                    href={url}
                    iconPath={SVG_PATHS[name]}
                    hollow
                    aria-label={name}
                  />
                ) : null
              )}
            </div>
          )}

          <p className="small-p">
            © {new Date().getFullYear()} {meta?.name || "Company"}, All Rights
            Reserved
          </p>

          <nav className="legal-container">
            {LEGAL_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="legal-link">
                <p>{label}</p>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
