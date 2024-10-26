const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"), // ローダーが処理するディレクトリ
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, "src/scss"), // ローダーが処理するディレクトリ
        // 利用するローダー（後ろから順に処理される）
        use: [
          // HTML の head 要素内にスタイルを追加する
          "style-loader",
          // CSS を モジュール に変換する
          "css-loader",
          // Sass を CSS にコンパイルする
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"], // 解決する拡張子
  },
};
