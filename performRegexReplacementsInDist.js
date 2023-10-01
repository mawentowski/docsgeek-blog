// Need to set root of live server to dist folder in settings.json
// "liveServer.settings.root": "/dist"
// 
const fs = require('fs');
const path = require('path');
const regexReplacements = [
  { pattern: /="\/+/g, replacement: '="' },
];

function getRelativePath(level) {
  return Array(level).join('../');
}

function performRegexReplacements(filePath, level) {
  let content = fs.readFileSync(filePath, 'utf8');
  if (level > 0) {
    const relativePath = getRelativePath(level);
    content = content.replace(/="\/+/g, `="${relativePath}`);
  }
  regexReplacements.forEach(replacement => {
    content = content.replace(replacement.pattern, replacement.replacement);
  });
  fs.writeFileSync(filePath, content);
}

function processDirectory(directoryPath, level) {
  const files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file === 'dist') {
        performRegexReplacements(filePath, level);
      } else {
        processDirectory(filePath, level + 1);
      }
    } else if (file === 'index.html') {
      performRegexReplacements(filePath, level);
    }
  });
}

const rootDirectory = path.join(__dirname, 'dist');
processDirectory(rootDirectory, 1);

console.log("Regex operation on dist completed")