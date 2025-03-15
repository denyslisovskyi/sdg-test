import { AxiosResponse } from "axios";

const TOKEN_KEY = "x-token";

export function storeXToken(response: AxiosResponse) {
  const token = response.headers["x-token"];

  if (token) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    console.warn("X-Token not found in response headers");
  }
}

export function getXToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeXToken() {
  localStorage.removeItem(TOKEN_KEY);
}
