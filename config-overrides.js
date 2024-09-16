// const webpack = require("webpack");

// module.exports = function override(config, env) {
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     util: require.resolve("util/"),
//     buffer: require.resolve("buffer/"),
//     stream: require.resolve("stream-browserify"),
//     crypto: require.resolve("crypto-browserify"),
//     url: require.resolve("url/"),
//     assert: require.resolve("assert/"),
//   };
//   config.plugins = (config.plugins || []).concat([
//     new webpack.ProvidePlugin({
//       Buffer: ["buffer", "Buffer"],
//       process: "process/browser",
//     }),
//   ]);
//   return config;
// };
