// Pages
import ContactPage from "../pages/contact/ContactPage";
import CustStoriesPage from "../pages/cust-stories/CustStoriesPage";
import LandingPage from "../pages/landing/LandingPage";
import PrivacyPolicyPage from "../pages/privacy-policy/PrivacyPolicyPage";
import ServicesDetailPage from "../pages/services-detail/ServicesDetailPage";
import SupportPage from "../pages/support/SupportPage";
import TermsConditionsPage from "../pages/terms-conditions/TermsConditionsPage";

export const appRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    menu: {
      Home: "hero",
      "About us": "about",
      Services: "services",
      Clients: "stories",
      Contact: "cta",
    },
  },
  { path: "/services/:slug", element: <ServicesDetailPage /> },
  { path: "/stories/:id", element: <CustStoriesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/support", element: <SupportPage /> },
  { path: "/terms-conditions", element: <TermsConditionsPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },
];
