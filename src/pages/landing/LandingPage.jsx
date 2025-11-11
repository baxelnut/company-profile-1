// Style
import "./LandingPage.css";
// Context
import { useCompany } from "../../context/CompanyContext";
// Section map (registry)
import About from "./sections/About";
import CTA from "./sections/CTA";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Stories from "./sections/Stories";

// Registry for dynamic section rendering
const SECTION_COMPONENTS = {
  hero: Hero,
  about: About,
  services: Services,
  stories: Stories,
  cta: CTA,
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
