import React from "react";
import { render } from "react-dom";

import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "./globalStyles";

render(<App />, document.getElementById("root"));
registerServiceWorker();
