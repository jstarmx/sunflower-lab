const fs = require('fs');
const path = require('path');
const glob = require('fast-glob');

const generateEntryFile = () => {
  let output = '';

  const files = glob.sync(['./src/lib/**/*.svelte', '!**/*.stories.svelte']);

  files.forEach((file) => {
    const pathName = file.replace('src/lib/', '');
    output += `import ${path.basename(file, '.svelte')} from '${pathName}';\n`;
  });

  const components = files
    .map((file) => path.basename(file, '.svelte'))
    .join(',\n  ');

  output += `\nexport {\n  ${components}\n};\n`;

  fs.writeFileSync('./src/lib/index.js', output);
};

const generateTypesFile = () => {
  let output = '';

  const files = glob.sync('./src/lib/types/components/*.d.ts');

  files.forEach((file) => {
    output += `export { default as ${path.basename(
      file,
      '.d.ts',
    )} } from '${file.replace('.d.ts', '')}';\n`;
  });

  fs.writeFileSync('./src/lib/types.d.ts', output);
};

generateEntryFile();
generateTypesFile();
