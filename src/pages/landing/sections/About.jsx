// Style
import "./About.css";

export default function About({ props, id, title }) {
  const aboutProps = props || {};

  return (
    <section id={id} className="about">
      <div className="title-container">
        <h6 className="title small-h">{title}</h6>
        <div className="heading">
          <h3>{aboutProps.heading}</h3>
          <h3 className="faded">{aboutProps.subheading}</h3>
        </div>
      </div>

      <div className="cards-container row components-list">
        {aboutProps.image?.map((img, i) => (
          <div key={i} className="card imaged-card">
            <img src={img.url} alt={img.alt || `Image ${i + 1}`} />
          </div>
        ))}
        {aboutProps.desc?.[0] && <p>{aboutProps.desc[0]}</p>}
      </div>

      <div className="cards-container grid2">
        <div className="spacer"></div>
        <div className="right-specs">
          {aboutProps.desc?.[1] && <p>{aboutProps.desc[1]}</p>}
          <div className="cards-container grid2">
            {aboutProps.specs?.map((spec, i) => (
              <div key={i} className="spec-item">
                <h1 className="big-h">
                  <span>{spec.number}</span>
                  <span className="colored-span">{spec.symbol}</span>
                </h1>
                <p>{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
