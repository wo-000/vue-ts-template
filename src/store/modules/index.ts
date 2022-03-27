import user, { State as UserState } from "./users/user";

export interface RootState {
  user: UserState;
}
const modules = {
  user,
};

export default modules;
