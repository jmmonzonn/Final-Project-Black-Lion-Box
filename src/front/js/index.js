//import react into the bundle
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "flowbite";
import initFontAwesome from "./component/initFontAwesome.js";

// NECESARIO PARA QUE CARGUE EL COMPONENTE DE FONTAWESOME

initFontAwesome();

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
