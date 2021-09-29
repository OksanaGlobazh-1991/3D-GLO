const path = require('path'); //плагин для корректного подключения dist

module.exports = {
    entry: './src/index.js', //точка входа
    output: { //точка выхода
      filename: 'bundle.js',
      path: path.resolve(__dirname,'./dist') //папка, в которую положим нашу папку с проектом
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/env']
              },
          },
          exclude: /node_modules/,
        }
      ]
    }
};