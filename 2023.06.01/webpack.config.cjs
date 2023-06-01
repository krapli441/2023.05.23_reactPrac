let path = require("path");
const { Extension } = require("typescript");

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: ["babel-loader"],
      },
      { test: [/\.ts$/, /\.tsx$/], use: ["babel-loader", "ts-loader"] },
    ],
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};
