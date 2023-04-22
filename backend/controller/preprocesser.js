import {text} from "../model/constants.js";

import { encode } from "gpt-3-encoder";

export function getSections(text) {
  const mainSections = text.split('###');
  return mainSections.map((section)=>{
    // Split text into an array of words
    const words = section.trim().split(" ");
    
    // Split words into sections of up to 1000 words each
    const sections = [];
    let currentSection = '';
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if ((currentSection + ' ' + word).split(" ").length <= 1000) {
        currentSection += ' ' + word;
      } else {
        sections.push(currentSection.trim());
        currentSection = word;
      }
    }
    if (currentSection.length > 0) {
      sections.push(currentSection.trim());
    }
    
    return sections;
  }).reduce((acc, curr) => acc.concat(curr), []).filter((section)=>section!=="");
}

console.log(getSections(text)[4]);