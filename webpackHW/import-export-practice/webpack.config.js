module.exports = {
  entry: ".import-export-practice/entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    //loaders: [
    //  { test: /\.css$/, loader: "style!css" }
    //]
  }
};