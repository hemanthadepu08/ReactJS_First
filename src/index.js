import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Myfile from "./Myfile";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Myfile />
  </StrictMode>
);
