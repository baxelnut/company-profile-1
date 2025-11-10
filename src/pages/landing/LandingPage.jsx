// Style
import "./LandingPage.css";
// Sections
import About from "./sections/About";
import Hero from "./sections/Hero";

export default function LandingPage() {
  return (
    <div className="page landing">
      <Hero />
      <About />
    </div>
  );
}
