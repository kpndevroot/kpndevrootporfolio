import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./assets/css/animations.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <MaterialThemeProvider>
          <App />
        </MaterialThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
