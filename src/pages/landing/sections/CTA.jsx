// Style
import "./CTA.css";
// Components
import Button from "../../../components/ui/Button";
import Icon from "../../../components/ui/Icon";
// Data
import { SVG_PATHS } from "../../../data/utilsData";

export default function CTA({ id, props, title }) {
  const ctaProps = props || {};

  return (
    <section id={id} className="cta">
      <div className="decoration-container">
        <p>{ctaProps.extras.text}</p>
        <div className="card imaged-card">
          <img
            src={ctaProps.extras.image[0].url}
            alt={ctaProps.extras.image[0].alt}
          />
        </div>
      </div>

      <div className="text-container">
        <h1>{title}</h1>
        <p>{ctaProps.heading}</p>
        <Button
          text={ctaProps.cta.text}
          to={ctaProps.cta.path}
          arrowRight
          iconAfter
          rounded
        />
      </div>

      <div className="decoration-container">
        <div className="card imaged-card">
          <img
            src={ctaProps.extras.image[1].url}
            alt={ctaProps.extras.image[1].alt}
          />
        </div>
        <div className="rating">
          <Icon path={SVG_PATHS.starFill} fill="var(--secondary)" size={24} />
          <h5>{ctaProps.extras.rating}</h5>
        </div>
      </div>
    </section>
  );
}
