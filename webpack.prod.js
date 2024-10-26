const common = require("./webpack.common");

console.log("webpack.prod.js");

module.exports = {
  ...common,
  mode: "production",
  devtool: "source-map",
};
