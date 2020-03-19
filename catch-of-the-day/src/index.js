// hey teacher

import React from "react"; //imports the entire React package
import { render } from "react-dom"; //imports just one method from the package
import Router from "./components/Router";
import "./css/style.css";

render(<Router />, document.querySelector("#main"));
