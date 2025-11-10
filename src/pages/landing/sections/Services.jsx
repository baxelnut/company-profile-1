import { useState } from "react";
// Style
import "./Services.css";
// Components
import Button from "../../../components/ui/Button";
import Icon from "../../../components/ui/Icon";
// Data
import { SVG_PATHS } from "../../../data/utilsData";

export default function Services({ props, id, title }) {
  const serviceProps = props || {};
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? serviceProps.services.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === serviceProps.services.length - 1 ? 0 : prev + 1
    );
  };

  const activeService = serviceProps.services?.[activeIndex];

  return (
    <section id={id} className="services">
      <div className="big-pic-container">
        <img src="assets/person1.webp" alt="" />
      </div>

      <div className="card service-container">
        <div className="content-container">
          <div className="title-container">
            <h6 className="title small-h">{title}</h6>
            <h4>{activeService?.serviceName}</h4>
          </div>
          <div className="cards-container row button-container">
            <Button
              iconPath={SVG_PATHS.chevronLeft}
              onClick={handlePrev}
              backgroundColor="var(--n600)"
              hoverBackgroundColor="var(--text)"
            />
            <Button
              iconPath={SVG_PATHS.chevronRight}
              onClick={handleNext}
              hoverBackgroundColor="var(--text)"
            />
          </div>
        </div>

        <div className="content-container">
          <div className="cards-container grid2">
            {activeService?.details?.map((detail, j) => (
              <div key={j} className="service-item">
                <div className="service-icon-container">
                  <Icon path={SVG_PATHS[detail.icon]} fill="var(--bg)" />
                </div>
                <div className="service-info">
                  <h6>{detail.label}</h6>
                  <p>{detail.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
