
export function getSections(text) {
  const sections = text.split('###');
  return sections.filter((section)=>section!=="");
}

