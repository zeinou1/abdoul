import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/App.css";
import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
//! remixicon
import "remixicon/fonts/remixicon.css";
//! aos
import "aos/dist/aos.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
