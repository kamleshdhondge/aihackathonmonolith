import {text} from "../model/constants.js";

export function getSections(text) {
  // Split contents by '#'
  const sections = text.split('###');
  return sections;
}
