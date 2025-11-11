import { useParams } from "react-router-dom";
// Style
import "./ServicesDetailPage.css";
// Components
import Error from "../../components/ui/Error";
import Loading from "../../components/ui/Loading";
// Context
import { useCompany } from "../../context/CompanyContext";

export default function ServicesDetailPage() {
  const { slug } = useParams();
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

  const serviceSection = company.frontend?.pages
    ?.find((page) => page.id === "landing")
    ?.sections?.find((section) => section.id === "services");

  const allServices = serviceSection?.props?.services || [];
  const service = allServices.find((s) => s.slug === slug);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="page services-detail">
      <h6>{service.serviceName}</h6>
      <pre>{JSON.stringify(service, null, 2)}</pre>
    </div>
  );
}
