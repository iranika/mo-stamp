module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: "./",
  assetsDir: "",
  outputDir: "dist",
  pwa: {
    name: "Nika Stamp",
    themeColor: "#2d3748",
    msTileColor: "#2d3748",
    appleMobileWebAppCapable: "no",
    appleMobileWebAppStatusBarStyle: "default",
    workboxPluginMode: "GenerateSW",
    workboxOptions: {
      skipWaiting: true,
      exclude: [
        "CNAME",
        /chunk-vendors.*.css.map/,
        /about.*.css.map/,
        /app.*.css.map/,
        /app.*.js/,
        /app.*.js.map/,
        /chunk-.*.css.map/,
        /chunk-.*.js/,
        /chunk-.*.js.map/
      ],
    }
  }
}
