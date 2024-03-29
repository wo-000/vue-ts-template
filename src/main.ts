import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store, { key } from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "@/assets/css/normalize.css";
const app = createApp(App);
// 全局使用element plus 图标
import * as ElIcons from "@element-plus/icons-vue";
for (const name in ElIcons) {
  app.component(name, (ElIcons as never)[name]);
}
// 全局使用svg 图标
import SvgIcon from "@/components/SvgIcon.vue";
app.component("svg-icon", SvgIcon);
import "@/assets/svg/index";

// mockJS
import "@/mockJS";

app.use(store, key).use(ElementPlus).use(router).mount("#app");
