const fs = require('fs');

export function getSections(filePath) {
  // Read file contents synchronously
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Split contents by '#'
  const sections = fileContent.split('#');
  return sections;
}
