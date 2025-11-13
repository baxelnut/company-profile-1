import { useState, useEffect } from "react";
// Style
import "./Hero.css";
// Components
import Button from "../../../components/ui/Button";
// Data
import { SVG_PATHS } from "../../../data/utilsData";

export default function Hero({ props, id }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeDesc, setActiveDesc] = useState("");
  const heroProps = props || {};
  const activeStep = heroProps.steps?.[activeIndex];

  useEffect(() => {
    if (heroProps.steps?.length > 0) {
      setActiveDesc(heroProps.steps[activeIndex].desc);
    }
  }, [heroProps.steps, activeIndex]);

  return (
    <section id={id} className="hero">
      <div className="lead">
        <div className="actions">
          <h6>{heroProps.subheading}</h6>
          <Button
            text={heroProps.cta.text}
            to={heroProps.cta.href}
            arrowRight
            iconAfter
            rounded
          />
        </div>
        <h1 className="title big-h">{heroProps.heading}</h1>
      </div>

      <div
        className="card imaged-card"
        style={{ backgroundImage: `url(${activeStep?.image.url})` }}
      >
        <div className="cards-container row steps-container">
          {heroProps.steps?.map((step, i) => (
            <div
              key={i}
              className={`card step-item ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            >
              <h6 className="step-label small-h">
                {`${i === activeIndex ? "" : i + 1} ${
                  i === activeIndex ? step.label : ""
                }`}
              </h6>
            </div>
          ))}
        </div>

        <div className="card card-actions">
          <h5>{activeDesc}</h5>
          <div className="hero-cta">
            <h6 className="small-h">{heroProps.cardCta.text}</h6>
            <Button iconPath={SVG_PATHS.chevronRight} type="submit" />
          </div>
        </div>
      </div>
    </section>
  );
}
