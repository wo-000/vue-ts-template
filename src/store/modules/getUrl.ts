export interface Url {
  beforeUrl: string;
}

const state: Url = {
  beforeUrl: "",
};

const mutations = {
  getUrl(state: Url, params: string): void {
    state.beforeUrl = params;
  },
};

export default {
  state,
  mutations,
  namespace: true,
};
