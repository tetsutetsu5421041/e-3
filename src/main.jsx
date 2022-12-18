import "materialize-css/dist/css/materialize.css"
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.js"
import "materialize-css/dist/js/materialize.min.js"

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#content")).render(<App />);