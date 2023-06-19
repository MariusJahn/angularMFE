const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { mf, shareAll } = require("@angular-architects/module-federation/webpack");
const path = require("path");

module.exports = {
  output: {
    uniqueName: "Shell",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For hosts (please adjust)
      remotes: {
        "schichten": "http://localhost:4300/remoteEntry.js",
        "mitarbeiter": "http://localhost:4400/remoteEntry.js",
      },

      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
        }),
      },

    }),
  ],
};
