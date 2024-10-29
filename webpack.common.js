const path = require("path");
const webpack = require("webpack");

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
        test: /\.ts$/,
        include: path.resolve(__dirname, "src"), // ローダーが処理するディレクトリ
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: false,
          },
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
      {
        test: /\.png$/,
        type: "asset/resource",
        generator: {
          filename: "static/[hash][ext][query]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".png"], // 解決する拡張子
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    new webpack.IgnorePlugin({
      // resourceRegExp: /^((?!2\.png).)*\.png$/, // 2.png以外の全ての.pngを無視
      resourceRegExp: /3\.png$/,
      contextRegExp: /src\/images$/,
    }),
  ],
};
