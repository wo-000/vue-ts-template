import { ActionContext } from "vuex";
interface Ilogininfo {
  id: number;
  isAdmin: boolean;
  username: string;
  password: string;
}
export interface State {
  isLogin: number;
  userinfo: Ilogininfo;
}

const state = {
  isLogin: 0,
  userinfo: {},
};

const mutations = {
  setUsername(state: State, params: State): void {
    state.isLogin = params.isLogin;
    state.userinfo = JSON.parse(JSON.stringify(params.userinfo));
  },
};

const actions = {
  login({ commit }: ActionContext<State, unknown>, params: State): void {
    commit("setUsername", params);
  },
};

export default {
  state,
  mutations,
  actions,
  namespaced: true,
};
