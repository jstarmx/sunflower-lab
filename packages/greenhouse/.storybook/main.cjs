const path = require('path');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin').default;

const replaceFileExtension = (filePath, newExtension) => {
  const { name, root, dir } = path.parse(filePath);
  return path.format({
    name,
    root,
    dir,
    ext: newExtension,
  });
};

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../src/lib/**/*.stories.@(ts|svelte)'],
  addons: ['@storybook/addon-svelte-csf'],
  webpackFinal: async (config) => {
    config.resolve.alias.svelte = path.resolve('node_modules', 'svelte');

    // Find the plugin instance that needs to be mutated
    const virtualModulesPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'VirtualModulesPlugin',
    );

    // Change the file extension to .cjs for all files that end with "generated-stories-entry.js"
    virtualModulesPlugin._staticModules = Object.fromEntries(
      Object.entries(virtualModulesPlugin._staticModules).map(
        ([key, value]) => {
          if (key.endsWith('generated-stories-entry.js')) {
            return [replaceFileExtension(key, '.cjs'), value];
          }
          return [key, value];
        },
      ),
    );

    // Change the entry points to point to the appropriate .cjs files
    config.entry = config.entry.map((entry) => {
      if (entry.endsWith('generated-stories-entry.js')) {
        return replaceFileExtension(entry, '.cjs');
      }
      return entry;
    });

    config.resolve = {
      ...config.resolve,
      plugins: [new ResolveTypeScriptPlugin()],
    };

    return config;
  },
};
