import service from "@/service/index";
import { AxiosResponse } from "axios";

interface IParams {
  username?: string;
  password?: string;
}

export function loginInfo(data: IParams): Promise<AxiosResponse> {
  return service({
    url: "/api/login",
    method: "get",
    params: data,
  });
}
