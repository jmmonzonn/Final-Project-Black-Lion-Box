import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faInstagram);
}

export default initFontAwesome;
