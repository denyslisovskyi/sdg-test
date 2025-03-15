import { client } from "./client";
import { AxiosRequestConfig } from "axios";

async function makeRequest<SuccessPayload>({
  headers = {},
  params = {},
  ...restConfig
}) {
  const config = {
    headers: {
      Authorization: `Bearer TOKEN`,
      ...headers,
    },
    params,
    ...restConfig,
  };

  return client.request<SuccessPayload>(config);
}

export function get<SuccessPayload>(url: string, config?: AxiosRequestConfig) {
  return makeRequest<SuccessPayload>({ url, method: "GET", ...config });
}

export function put<SuccessPayload>(url: string, config?: AxiosRequestConfig) {
  return makeRequest<SuccessPayload>({ url, method: "PUT", ...config });
}
