const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin"); 

module.exports = {
  mode: "production",
  entry: ['./src/js/index.js', './src/style.css'],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
        exclude: [/node_modules/] //исключение что не будет обрабатываться этим лоадером
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
        use: [
          {
            loader: "file-loader", //какой лоадер используется
            options: {
              outputPath: "assets/img", //папка куда будет помщены файлы
              name: "[name].[ext]"
            }
          },
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                processive: true,
                quality: 98
              }
            }
          }
        ]
      },
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(s[ca]ss)$/, //может поддердивать scss and sass
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "style-loader" }, //добавляет css на страницу
          { loader: "css-loader" }, // обрабатывает css
          { loader: "sass-loader" } // преабразует sass/scss в css
        ]
      },
      {
        test: /\.(css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Singolo",
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CopyWebpackPlugin([
      { from: "src/assets/img", to: `assets/img` },
    ])
  ],

  devServer: {
    open: true
  }
};
