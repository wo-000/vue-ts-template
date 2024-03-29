import Mock from "mockjs";
const localURL = "http://localhost:8080";

import { userData } from "./user/user";
import { getUserInfo } from "./user/login";

Mock.setup({
  timeout: "1000-2000",
});

Mock.mock(localURL + "/api/login", "get", getUserInfo);
Mock.mock(localURL + "/api/user", "get", userData);
