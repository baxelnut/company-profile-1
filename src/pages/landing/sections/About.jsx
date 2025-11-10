// Style
import "./About.css";
// Context
import { useCompany } from "../../../context/CompanyContext";

export default function About() {
  const { company, status } = useCompany();
  if (status !== "ready") return null;

  const landingPage = company?.frontend?.pages?.find((p) => p.id === "landing");
  const aboutSection = landingPage?.sections?.find((s) => s.id === "about");
  const aboutProps = aboutSection?.props || {};

  console.log(aboutProps);

  return (
    <section id={aboutSection.id} className="about">
      <h6 className="title small-h">{aboutSection.title}</h6>
      <div className="heading">
        <h4>{aboutProps.heading}</h4>
        <h4>{aboutProps.subheading}</h4>
      </div>

      <div className="cards-container row components-list">
        <div className="image-wrapper">
          <img src={aboutProps.image[0].webp} alt={aboutProps.image[0].alt} />
        </div>
        <div className="image-wrapper">
          <img src={aboutProps.image[1].webp} alt={aboutProps.image[1].alt} />
        </div>
        <div className="image-wrapper">
          <img src={aboutProps.image[2].webp} alt={aboutProps.image[2].alt} />
        </div>

        <p>{aboutProps.desc[0]}</p>
      </div>

      <div className="cards-container grid2">
        <div className="spacer"></div>
        <div className="right-specs">
          <p>{aboutProps.desc[1]}</p>
          <div className="cards-container grid2">
            <div className="spec-item">
              <h1>
                <span> {aboutProps.specs[0].number} </span>
                <span className="colored-span">
                  {aboutProps.specs[0].symbol}
                </span>
              </h1>
              <p>{aboutProps.specs[0].desc}</p>
            </div>
            <div className="spec-item">
              <h1>
                <span> {aboutProps.specs[1].number} </span>
                <span className="colored-span">
                  {aboutProps.specs[1].symbol}
                </span>
              </h1>
              <p>{aboutProps.specs[1].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
