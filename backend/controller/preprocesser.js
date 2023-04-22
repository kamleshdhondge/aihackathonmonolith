export function getSections(text) {
  // Split contents by '#'
  const sections = text.split('###');
  sections.filter((section)=>{section!==""})
  return sections;
}


console.log(getSections(text)[4]);