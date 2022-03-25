const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  chainWebpack: (config) => {
    // svg loader start
    config.module
      .delete("svg")
      .rule("svg")
      .exclude.add(resolve("src/assets/svg"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader");
    // svg loader end
  },
};
