// import { ActionContext } from "vuex";

export interface State {
  username: string;
  age: number;
}

const state = {
  username: "username",
  age: 20,
};

export default {
  state,
  mutations: {},
  actions: {},
  namespaced: true,
};
