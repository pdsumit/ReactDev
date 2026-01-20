import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { WatchListContextProvider } from "./Store/WatchList-Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <WatchListContextProvider>
        <App />
      </WatchListContextProvider>
    </BrowserRouter>
  </StrictMode>
);
