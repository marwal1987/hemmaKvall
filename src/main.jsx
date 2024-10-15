import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { store } from "./store/store";
import App from "./App";
import "./styles/index.css";
import { StrictMode } from "react";
import TagManager from "react-gtm-module";
import ReactGA from "react-ga4";

const GTM_ID = import.meta.env.VITE_GTM_ID;
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

TagManager.initialize({
  gtmId: GTM_ID, // Replace with your GTM ID
});

ReactGA.initialize(GA_MEASUREMENT_ID);

ReactGA.send({ hitType: "pageview", page: window.location.pathname });

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
