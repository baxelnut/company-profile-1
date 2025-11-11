import { useState } from "react";
// Style
import "./Stories.css";
// Components
import Button from "../../../components/ui/Button";
// Data
import { SVG_PATHS } from "../../../data/utilsData";

export default function Stories({ id, props, title }) {
  const clientProps = props || {};
  const { text = {}, clients = [] } = clientProps;

  const [index, setIndex] = useState(0);
  const visibleClients = clients.slice(index, index + 3);

  const next = () => {
    if (index + 3 < clients.length) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id={id} className="cust-stories">
      <div className="lead">
        <div className="title-container">
          <h6 className="title small-h">{title}</h6>
          {text.heading && <h4 className="big-h">{text.heading}</h4>}
          {text.subheading && (
            <h4 className="big-h faded">{text.subheading}</h4>
          )}
        </div>

        <div className="caption-container">
          {text.caption && <p>{text.caption}</p>}
          <div className="cards-container row button-container">
            <Button
              onClick={prev}
              iconPath={SVG_PATHS.chevronLeft}
              backgroundColor="rgba(var(--primary-rgb), 0.2)"
              textColor="var(--primary)"
            />
            <Button onClick={next} iconPath={SVG_PATHS.chevronRight} />
          </div>
        </div>
      </div>

      <div className="cards-container flex-slider">
        {visibleClients.map((client, i) => (
          <div
            key={i}
            className="card client-container imaged-card"
            style={{ backgroundImage: `url(${client.url})` }}
          >
            <h4>{client.name}</h4>
            <p>{client.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
