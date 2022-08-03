module.exports = function (api) {
   api.cache(true);
   return {
      presets: ['babel-preset-expo'],
      plugins: [
         [
            'module-resolver',
            {
               cwd: 'babelrc',
               root: ['./app'],
               extensions: [
                  '.ios.ts',
                  '.android.ts',
                  '.ts',
                  '.ios.tsx',
                  '.android.tsx',
                  '.tsx',
                  '.jsx',
                  '.js',
                  '.json',
               ],
               alias: {
                  _components: './app/components',
                  _images: './app/images',
                  _pages: './app/pages',
                  _theme: './app/theme',
                  _utils: './app/utils',
               },
            },
         ],
      ],
   };
};
