import { useEffect, useState } from "react";
// Style
import "./Hero.css";
// Components
import Button from "../../../components/ui/Button";
// Context
import { useCompany } from "../../../context/CompanyContext";
// Data
import { SVG_PATHS } from "../../../data/utilsData";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDesc, setActiveDesc] = useState("");
  const { company, status } = useCompany();

  const landingPage = company?.frontend?.pages?.find((p) => p.id === "landing");
  const heroSection = landingPage?.sections?.find(
    (s) => s.id === "hero-landing"
  );
  const heroProps = heroSection?.props || {};
  const activeStep = heroProps.steps?.[activeIndex];

  useEffect(() => {
    if (heroProps.steps?.length > 0) {
      setActiveDesc(heroProps.steps[activeIndex].desc);
    }
  }, [heroProps.steps, activeIndex]);

  const handleSelect = (index, desc) => {
    setActiveIndex(index);
    setActiveDesc(desc);
  };

  if (status !== "ready") return null;

  return (
    <section id={heroSection.id} className="hero">
      <div className="lead">
        <div className="actions">
          <p className="small-h">{heroProps.subheading}</p>
          <Button text={heroProps.cta.text} href={heroProps.cta.href} rounded />
        </div>

        <h1 className="title big-h">{heroProps?.heading}</h1>
      </div>

      <div
        className="card hero-image"
        style={{ backgroundImage: `url(${activeStep?.image.webp})` }}
      >
        <div className="steps-container">
          {heroProps.steps?.map((step, i) => (
            <div
              key={i}
              className={`card step-item ${i === activeIndex ? "active" : ""}`}
              onClick={() => handleSelect(i, step.desc)}
            >
              <h6 className="step-label small-h">
                {`${i + 1} ${i === activeIndex ? step.label : ""}`}
              </h6>
            </div>
          ))}
        </div>

        <div className="card card-actions">
          <h5>{activeDesc}</h5>
          <div className="cta">
            <h6 className="small-h">{heroProps.cardCta.text}</h6>
            <Button iconPath={SVG_PATHS.chevronRight} type="submit" />
          </div>
        </div>
      </div>
    </section>
  );
}
