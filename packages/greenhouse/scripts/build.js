const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

let output = '';

const files = glob.sync('./src/**/*.svelte');

files.forEach((file) => {
  output += `import ${path.basename(file, '.svelte')} from '${file}';\n`;
});

const components = files
  .map((file) => path.basename(file, '.svelte'))
  .join(',\n  ');

output += `\nexport {\n  ${components}\n};\n`;

fs.writeFileSync('index.js', output);
