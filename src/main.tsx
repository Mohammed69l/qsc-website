import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ✅ Correct import
import { LanguageProvider } from "./lang";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
);
