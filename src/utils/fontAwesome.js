// utils/fontAwesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faSquareFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faPhone,
  faEnvelope,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export const setupFontAwesome = () => {
  library.add(
    fab,
    faChevronRight,
    faPhone,
    faEnvelope,
    faSquareFacebook,
    faInstagram,
    faLinkedin,
    faSpinner
  );
};