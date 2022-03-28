import user, { State as UserState } from "./users/user";
import getUrl, { Url as GetUrl } from "./getUrl";
export interface RootState {
  user: UserState;
  getUrl: GetUrl;
}
const modules = {
  user,
  getUrl,
};

export default modules;
