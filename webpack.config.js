let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require('webpack');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry:  {
    app:"./src/index.js",
    search:"./src/search.js"
  },
  mode:"production",
  output: {
    filename: '[name][chunkhash:8].js',
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /.(png|jpg|jpeg|gif)$/,
        use:[{
          loader:"file-loader",
          options: {
            // limit: 10000,
            name:'img/[name][hash:8].[ext]'
          }
        }]
       
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      templateParameters: (compilation, assets, assetTags, options) => {
        return {
          title: "学习webpack"
        };
      },
      template: "./src/template.html"
    }),
    new MiniCssExtractPlugin({
      filename:"[name][contenthash:8].css"
    })
  ],
};
