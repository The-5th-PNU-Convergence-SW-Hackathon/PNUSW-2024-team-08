// src/commons/icons/fontawesome.js
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";

// 필요한 아이콘만 가져와서 추가할 수도 있습니다.
import {
  faCoffee,
  faPlus,
  faArrowUp,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

library.add(fas, far, fab, faCoffee, faPlus, faArrowUp, faArrowDown);
