const fs = require('fs');
const path = require('path');

// Define the regex pattern for matching href attributes that don't end with .css.
const regexReplacements = [
  // ensure that all hrefs start with a '/blog'
  // { pattern: /href="\/([^"]+)"/g, replacement: 'href="/blog/$1"' },
  // get rid of repeats: /blog/blog/
  // { pattern: /href="\/blog\/blog\//g, replacement: 'href="/blog/' },
  // add .html to pages
  // { pattern: /href="\/blog\/([^"]+)"/g, replacement: 'href="/blog/$1.html"' },
  // remove instances where '.html' was added to '.css' files
  // { pattern: /.css.html/g, replacement: '.css' },
// remove instances where '.html' was added to '.svg' files
  // { pattern: /.svg.html/g, replacement: '.svg' },
  // remove instances where '.html' was added to '.xml' files
  // { pattern: /.xml.html/g, replacement: '.xml' },
    // Add .html to post routes on the search page
  // { pattern: /href:`\/blog\/posts\/\${Du\(u.data\)}/g, replacement: 'href:`/blog/posts/$${Du(u.data)}.html' },
  // Add .html to post routes on the search page
  // { pattern: /href:`\/blog\/posts\/\${Du\(u.data\)}/g, replacement: 'href:`/blog/posts/$${Du(u.data)}.html' },
  // Ensure that all srcs start with '/blog
  { pattern: /src="\/([^"]+)"/g, replacement: 'src="/blog/$1"' },
  // get rid repeats: /blog/blog/
  { pattern: /src="\/blog\/blog\//g, replacement: 'src="/blog/' },

];

// Function to perform regex replacements in a given file.
function performRegexReplacements(filePath) {
  // Read the content of the file.
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Apply each regex replacement defined in regexReplacements.
  regexReplacements.forEach(replacement => {
    content = content.replace(replacement.pattern, replacement.replacement);
  });
  
  // Write the modified content back to the file.
  fs.writeFileSync(filePath, content);
}

// Recursive function to process directories and files.
function processDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      // Continue processing subdirectories.
      processDirectory(filePath);
    } else {
      // Check if the file has a supported extension (.html or .js).
      const ext = path.extname(filePath).toLowerCase();
      if (ext === '.html' || ext === '.js') {
        // Perform replacements in .html and .js files.
        performRegexReplacements(filePath);
      }
    }
  });
}

// Define the root directory to start processing.
const rootDirectory = path.join(__dirname, 'dist');

// Start processing directories and files.
processDirectory(rootDirectory);

// Display a completion message.
console.log("Regex operation on .html files in dist completed");
