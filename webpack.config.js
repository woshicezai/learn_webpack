let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let webpack = require('webpack');
module.exports = {
  entry: ['react-hot-loader/patch', './src/index.js'],
  mode:"development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      templateParameters: (compilation, assets, assetTags, options) => {
        return {
          title: "学习webpack"
        };
      },
      template: "./src/template.html"
    })
  ],
  devServer:{
    contentBase:"./dist",
    hot:true,
    // hotOnly:true

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
        use: ["style-loader", "css-loader"]
      },
      {
        test: /.(png|jpg|jpeg|gif)$/,
        use:[{
          loader:"url-loader",
          options: {
            limit: 10000,
          }
        }]
       
      }
    ]
  }
};
