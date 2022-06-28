module.exports = {
  setupFiles: ['./src/setupTests.js'],
  transform: {
    '^.+\\.(jsx|js|png)?$': [
      'esbuild-jest-transform',
      {
        target: 'esnext',
        loader: {
          '.js': 'jsx',
          '.scss': 'dataurl',
          '.png': 'dataurl',
          '.jpg': 'dataurl',
          '.svg': 'text'
        }
      },
    ],
  },
};
