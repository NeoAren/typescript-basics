const path = require('path');

module.exports = {
   mode: 'production',
   entry: './src/app.ts',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [
         { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' }
      ]
   },
   resolve: {
      extensions: ['.ts', '.js']
   }
};
