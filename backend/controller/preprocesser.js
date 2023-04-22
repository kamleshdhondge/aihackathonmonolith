
export function getSections(text) {
  // Split contents by '#'
  const sections = text.split('###');
  return sections.filter((section)=>{return section!==""})
}
