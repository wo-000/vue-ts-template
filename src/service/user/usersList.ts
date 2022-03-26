import service from "@/service/index";
import { AxiosResponse } from "axios";

interface IParams {
  user?: string;
}

export function usersData(data: IParams): Promise<AxiosResponse> {
  return service({
    url: "/api/user",
    method: "get",
    params: data,
  });
}
