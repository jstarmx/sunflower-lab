const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

const generateEntryFile = () => {
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
};

const generateTypesFile = () => {
  let output = '';

  const files = glob.sync('./src/types/components/*.d.ts');

  files.forEach((file) => {
    output += `export { default as ${path.basename(
      file,
      '.d.ts',
    )} } from '${file.replace('.d.ts', '')}';\n`;
  });

  fs.writeFileSync('./types.d.ts', output);
};

generateEntryFile();
generateTypesFile();
