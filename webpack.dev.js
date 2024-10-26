const common = require("./webpack.common");

console.log("webpack.dev.js");

module.exports = {
  ...common,
  mode: "development",
  devtool: "eval-source-map",
};
