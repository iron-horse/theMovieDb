var webpack = require("webpack");
var webpackMerge = require("webpack-merge");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var commonConfig = require("./webpack.common.js");
var helpers = require("./helpers");


const ENV = process.env.NODE_ENV = process.env.ENV || "development";
const theMovieDBApiKey = process.env.theMovieDBApiKey = process.env.theMovieDBApiKey || "DEVELOPMENT_API_KEY_MOVIEDB";

module.exports = webpackMerge(commonConfig, {
  target: "web",
  devtool: "cheap-module-eval-source-map",
  output: {
    path: helpers.root("dist/public"),
    filename: "[name]-bundle.js",
    chunkFilename: "[id].chunk.js"
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      app: {
        environment: JSON.stringify(ENV),
        theMovieDBApiKey: JSON.stringify(theMovieDBApiKey)
      }
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: "minimal"
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false,
    module: false,
  }
});