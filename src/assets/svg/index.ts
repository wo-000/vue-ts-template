const req = require.context("@/assets/svg/icons", false, /\.svg$/);
const requireAll = (reqireContext: __WebpackModuleApi.RequireContext) =>
  reqireContext.keys().map(reqireContext);
requireAll(req);
