// Pages
import ContactPage from "../pages/contact/ContactPage";
import CustStoriesPage from "../pages/cust-stories/CustStoriesPage";
import LandingPage from "../pages/landing/LandingPage";
import ServicesDetailPage from "../pages/services-detail/ServicesDetailPage";

export const appRoutes = [
  {
    path: "/",
    element: <LandingPage />,
    menu: { Home: "hero", "Item A": "a" },
  },
  { path: "/services/:id", element: <ServicesDetailPage /> },
  { path: "/stories/:cust", element: <CustStoriesPage /> },
  { path: "/contact", element: <ContactPage /> },
];
