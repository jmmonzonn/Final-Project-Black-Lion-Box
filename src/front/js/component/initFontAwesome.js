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
  faCheck,
  faPenToSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function initFontAwesome() {
  library.add(
    fab,
    faTwitterSquare,
    faFacebook,
    faLinkedin,
    faInstagram,
    faXmark,
    faPenToSquare,
    faCheck
  );
}

export default initFontAwesome;
