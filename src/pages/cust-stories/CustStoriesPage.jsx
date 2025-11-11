import { useParams } from "react-router-dom";
// Style
import "./CustStoriesPage.css";
// Components
import Error from "../../components/ui/Error";
import Loading from "../../components/ui/Loading";
// Context
import { useCompany } from "../../context/CompanyContext";

export default function CustStoriesPage() {
  const { id } = useParams();
  const { company, status, errorMsg } = useCompany();

  if (status === "loading")
    return (
      <div className="page load">
        <Loading />
      </div>
    );

  if (errorMsg)
    return (
      <div className="page load">
        <Error message={errorMsg} />
      </div>
    );

  const homePage = company.frontend?.pages?.find((p) => p.id === "landing");
  const storiesSection = homePage?.sections?.find((s) => s.id === "stories");
  const client = storiesSection?.props?.clients?.find((c) => c.id === id);

  if (!client) {
    return (
      <div className="page stories">
        <h2>Story Not Found</h2>
        <p>No customer story found for ID: {id}</p>
      </div>
    );
  }

  const { name, title, url, story } = client;

  return (
    <div className="page stories">
      <h2>{story.headline}</h2>
      <p className="summary">{story.description}</p>

      <div className="story-meta">
        <h4>{name}</h4>
        <p>{title}</p>
        <img src={url} alt={`${name} portrait`} className="client-photo" />
      </div>

      <div className="story-stats">
        <pre>{JSON.stringify(story.stats, null, 2)}</pre>
      </div>

      {/* Debug placeholder */}
      <div className="debug">
        <pre>{JSON.stringify(client, null, 2)}</pre>
      </div>
    </div>
  );
}
