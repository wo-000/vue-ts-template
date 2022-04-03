import { RouteRecordRaw } from "vue-router";
import { addRoules, addAdminRoules } from "@/untils/permission";
export interface Url {
  beforeUrl: string;
  permissionArr?: Array<number>;
  allRouters?: Array<RouteRecordRaw>;
}
interface IRouter {
  routes: RouteRecordRaw[];
  userRoutes?: RouteRecordRaw[];
  notFoundRoute: RouteRecordRaw[];
}

const state: Url = {
  beforeUrl: "",
  permissionArr: [],
  allRouters: [],
};

const mutations = {
  permissionArr(state: Url, params: Array<number>): void {
    state.permissionArr = params;
  },
  getUrl(state: Url, params: string): void {
    state.beforeUrl = params;
  },
  setRouters(state: Url, params: IRouter): void {
    // state.allRouters = state.defaultRoutes;
    let addRoutes = params.userRoutes!;
    const userLogin = JSON.parse(
      window.localStorage.getItem("userLogin") as string
    );
    const isAdmin = userLogin.userinfo.isAdmin;
    if (!isAdmin) {
      addRoutes = addRoutes.filter((item: RouteRecordRaw) => {
        return !item.meta?.isAdmin;
      });
      const rulesRoutes = (state.allRouters = params.routes
        .concat(addRoutes)
        .concat(params.notFoundRoute));
      addRoules(rulesRoutes);
      state.allRouters = rulesRoutes;
      // const addPermissionRoutes = deepRoute(
      //   state.allRouters as Array<RouteRecordRaw>
      // );
      // addPermissionRoutes.map((item) => {
      //   if (item.path === "/Users") {
      //     item.meta!.rules = ["add", "edit"];
      //   }
      // });
    } else {
      const rulesAdminRoutes = (state.allRouters = params.routes
        .concat(addRoutes)
        .concat(params.notFoundRoute));
      addAdminRoules(rulesAdminRoutes);
      state.allRouters = rulesAdminRoutes;
      // console.log(deepRoute(state.allRouters as Array<RouteRecordRaw>));
    }
  },
};

export default {
  state,
  mutations,
  namespace: true,
};
