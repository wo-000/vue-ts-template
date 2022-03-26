import Mock from "mockjs";
const localURL = "http://localhost:8080";

import { userData } from "./user/user";

Mock.setup({
  timeout: "1000-2000",
});

Mock.mock(localURL + "/api/user", "get", userData);
