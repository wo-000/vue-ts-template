import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from "vue";
import modules, { RootState } from "./modules";

// 定义key，用于在main.ts 中使用
export const key: InjectionKey<Store<RootState>> = Symbol();

export function useStore(): Store<RootState> {
  return baseUseStore(key);
}

export default createStore<RootState>({
  modules: modules,
});
