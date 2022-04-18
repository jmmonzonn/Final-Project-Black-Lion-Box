import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  fas,
  faCheck,
  faPenToSquare,
  faXmark,
  faCloudMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    fas,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faInstagram,
    faXmark,
    faPenToSquare,
    faCheck,
    faCloudMoon,
    faSun
  );
}

export default initFontAwesome;
