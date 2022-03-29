import { RouteRecordRaw } from "vue-router";
export interface Url {
  beforeUrl: string;
  allRouters?: Array<RouteRecordRaw>;
}

const state: Url = {
  beforeUrl: "",
  allRouters: [],
};

const mutations = {
  getUrl(state: Url, params: string): void {
    state.beforeUrl = params;
  },
  setRouters(state: Url, params: any): void {
    // state.allRouters = state.defaultRoutes;
    let addRoutes = params.userRoutes;
    const userLogin = JSON.parse(
      window.localStorage.getItem("userLogin") as string
    );
    const isAdmin = userLogin.userinfo.isAdmin;
    if (!isAdmin) {
      addRoutes = params.userRoutes.filter((item: RouteRecordRaw) => {
        return !item.meta?.isAdmin;
      });
      state.allRouters = params.routes.concat(addRoutes);
    } else {
      state.allRouters = params.routes.concat(addRoutes);
    }
  },
};

export default {
  state,
  mutations,
  namespace: true,
};
