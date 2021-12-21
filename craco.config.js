const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, './src/styles')],
        },
      },
    },
  },
  webpack: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
};
