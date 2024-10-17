import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StrictMode } from "react";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";
import App from "./App";
import "./styles/index.css";

/**
 * Huvudstarten för applikationen där alla viktiga providers sätts upp:
 *
 * - StrictMode: Hjälper till att identifiera potentiella problem i applikationen och varnar för osäkra delar.
 * - HelmetProvider: Tillhandahåller en kontext för att hantera dynamiska <head>-element (SEO och meta-tagg).
 * - Provider: Kopplar Redux-storen till React-applikationen och gör den tillgänglig överallt i komponentträdet.
 * - Router: Hanterar navigering och routing i applikationen, så att olika URL-paths renderar olika komponenter/sidor.
 */

const GTM_ID = import.meta.env.VITE_GTM_ID;
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

const tagManagerArgs = {
  gtmId: GTM_ID,
};

// Initialisera Google Tag Manager med ID:t
TagManager.initialize(tagManagerArgs);

// Initialisera Google Analytics med mät-ID
ReactGA.initialize(GA_MEASUREMENT_ID);

// Rendera React-applikationen i elementet med id "root"
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </HelmetProvider>
  </StrictMode>
);
