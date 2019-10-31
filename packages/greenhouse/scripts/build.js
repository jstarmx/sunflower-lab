const path = require('path');
const fs = require('fs-extra');
const glob = require('fast-glob');
const icons = require('@mdi/js');

// Create dist directory
if (fs.existsSync('dist')) {
  fs.removeSync('dist/');
}
fs.mkdirSync('dist/components', { recursive: true });

// Create icon components in dist
Object.keys(icons)
  .filter(iconName => !iconName.startsWith('__'))
  .forEach(iconName => {
    const output = `<svg class="icon" viewBox="0 0 24 24">
  <path d="${icons[iconName]}" />
</svg>`;

    fs.writeFileSync(`dist/components/${iconName}.svelte`, output);
  });

// Copy components to dist
const components = glob.sync('src/**/*.svelte');
components.forEach(component => {
  const fileName = path.basename(component);
  fs.copyFileSync(component, `dist/components/${fileName}`);
});

// Generate entry file
const files = glob.sync('dist/components/*.svelte');
let output = '';

files.forEach(file => {
  output += `import ${path.basename(file, '.svelte')} from './${file}';\n`;
});

const componentList = files
  .map(file => path.basename(file, '.svelte'))
  .join(',\n  ');

output += `\nexport {\n  ${componentList}\n};\n`;

fs.writeFileSync('index.js', output);
