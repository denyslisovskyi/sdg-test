import { AxiosResponse } from "axios";
import { put, get, routes } from "@/api";
import { ISignupResponse } from "@/types";

const authorization = {
  signup(data: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<ISignupResponse>> {
    return put(routes.authorization.all(), { data });
  },

  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<AxiosResponse<ISignupResponse>> {
    return get(routes.authorization.all(), {
      headers: {
        Authorization: `Basic ${btoa(`${email}:${password}`)}`,
      },
    });
  },
};

export default authorization;
