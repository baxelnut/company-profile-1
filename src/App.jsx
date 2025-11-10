import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Style
import "./App.css";
// Pages
import { appRoutes } from "./routes/AppRoutes";
import PageNotFound from "./pages/PageNotFound";
// Components
import Layout from "./components/layouts/Layout";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {appRoutes.map(({ path, element, menu }) => (
          <Route
            key={path}
            path={path}
            element={<Layout menu={menu}>{element}</Layout>}
          />
        ))}
        <Route path="*" element={<PageNotFound />} /> {/* 404 fallback */}
      </Routes>
    </Router>
  );
}

export default App;
