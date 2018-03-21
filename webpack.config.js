// COMMON

const webpack = require("webpack");
const path = require("path");

const outputPath = path.join(__dirname, "/dist");

const htmlConfigIndex = {
  template: "./src/html/index.template.html",
  filename: "index.html",
};

module.exports = {
  entry: {
    main: "./src/js/main.js",
  },
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 3333,
    host: "0.0.0.0",
    https: {},
    historyApiFallback: true,
  },
  output: {
    path: outputPath + "/",
    publicPath: "/",
    filename: "[name].js",
  },
};
