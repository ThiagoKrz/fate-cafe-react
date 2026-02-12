import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App'
import { ServantProvider } from "./context/ServantContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ServantProvider>
      <App />
    </ServantProvider>
  </StrictMode>
);
