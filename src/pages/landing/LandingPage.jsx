// Style
import "./LandingPage.css";
// Context
import { useCompany } from "../../context/CompanyContext";
// Section map (registry)
import About from "./sections/About";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

// Registry for dynamic section rendering
const SECTION_COMPONENTS = {
  hero: Hero,
  about: About,
  services: Services,
  // contact: Contact,
};

export default function LandingPage() {
  const { company, status } = useCompany();
  if (status !== "ready") return null;

  const landingPage = company?.frontend?.pages?.find((p) => p.id === "landing");
  const sections = landingPage?.sections || [];

  return (
    <div className="page landing">
      {sections.map((section) => {
        const SectionComponent = SECTION_COMPONENTS[section.id];
        if (!SectionComponent) {
          console.warn(`⚠️ Missing component for section: ${section.id}`);
          return (
            <section key={section.id} className="section-missing">
              <p>Section "{section.title}" is not yet implemented.</p>
            </section>
          );
        }
        return <SectionComponent key={section.id} {...section} />;
      })}
    </div>
  );
}
