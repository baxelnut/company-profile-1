import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Style
import App from "./App.jsx";
import "./index.css";
// Context Provider
import { CompanyProvider } from "./context/CompanyContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CompanyProvider>
      <App />
    </CompanyProvider>
  </StrictMode>
);
