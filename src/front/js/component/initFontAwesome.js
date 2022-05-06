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
  faDumbbell,
  faPenToSquare,
  faXmark,
  faUserPlus,
  faUserXmark,
  faCloudMoon,
  faUser,
  faTriangleExclamation,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    fas,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faUserXmark,
    faInstagram,
    faXmark,
    faPenToSquare,
    faUserPlus,
    faUser,
    faCheck,
    faTriangleExclamation,
    faCloudMoon,
    faSun,
    faDumbbell
  );
}

export default initFontAwesome;
