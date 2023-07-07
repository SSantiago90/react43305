import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import boostrap
/* import "bootstrap/dist/css/bootstrap.min.css";

import * as bootstrap from "bootstrap"; */
// import roboto font
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// estilos base MUI
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <CssBaseline />
    <App />
  </>
);
