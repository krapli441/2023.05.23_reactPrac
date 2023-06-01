let path = require("path");

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
      { test: [/\.ts$/, /\.tsx$/], use: ["ts-loader"] },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
  },
};
