import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import ClassComp from "./ClassComp";
import JsxStyles from "./JsxStyles";
import Myfile from "./Myfile";
import StateIN from "./StateIN";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <Myfile /> */}
    {/* <App /> */}
    {/* <JsxStyles /> */}
    {/* <ClassComp /> */}
    <StateIN />
  </StrictMode>
);
