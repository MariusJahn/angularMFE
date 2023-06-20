const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { mf, shareAll } = require("@angular-architects/module-federation/webpack");
const path = require("path");


module.exports = {
  output: {
    uniqueName: "mitarbeiter",
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

      //For remotes (please adjust)
      name: "mitarbeiter",
      filename: "remoteEntry.js",
      exposes: {
        './AppComponent': './src/app/app.component.ts',
        './AppModule': './src/app/app.module.ts',
        './ArbeitszeitenModule': './src/app/arbeitszeiten/arbeitszeiten.module.ts',
        './Subheader': './src/app/subheader/subheader.component.ts',
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
