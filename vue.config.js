const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  // 配置端口和跨域
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8080/",
        changeOrigin: true,
        pathRewrite: {
          api: "/",
        },
      },
    },
  },
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
