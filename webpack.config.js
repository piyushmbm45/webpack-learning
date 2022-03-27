const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
          test: /\.js$/,
          exclude: /mode_modules/,
          use: {
              loader: 'babel-loader',
              presets: ['@babel/preset-env'],
              
          }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "WebPack Learning App",
      filename: "index.html",
      template: "src/templateIndex.html",
    }),
  ],
};
