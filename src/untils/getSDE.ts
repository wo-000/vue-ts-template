const sde = process.env.NODE_ENV; //是否为生产环境
const isProduction = ["production", "prod"].includes(sde as string); //是否为生产环境
const isFat = ["fat", "uat"].includes(sde as string); //是否为测试环境
const isDevelopment = ["development", "dev"].includes(sde as string); //是否为开发环境
const baseUrl = process.env.VUE_APP_BASE_URL;
export { isProduction, isFat, isDevelopment, baseUrl };
