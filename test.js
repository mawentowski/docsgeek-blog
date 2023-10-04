const regexReplacements = [
    // ensure there is a /blog on all pages
    { pattern: /href="\/([^"]+)"/g, replacement: 'href="/blog/$1"' },
    // get rid of repeats: /blog/blog/
  
  
    // { pattern: /href="\/blog\/blog\//g, replacement: 'href="/blog/' },
    // add .html to pages
    // { pattern: /href="\/blog\/([^"]+)"/g, replacement: 'href="/blog/$1.html"' },
    // remove the inadvertant replacement on CSS files
    // { pattern: /.css.html/g, replacement: '.css' }
  ];
  