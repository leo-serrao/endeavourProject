import { parseCookies, setCookie } from "nookies";
import axios, { AxiosError } from "axios";
import { signOut } from "../contexts/AuthContext";
import { GetServerSidePropsContext } from "next";
import { AuthTokenError } from "./errors/AuthTokenError";

let isRefreshing = false;
let failedRequestsQueue = <any>[];

type Context = undefined | GetServerSidePropsContext;

export function setupAPIClient(ctx: Context = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://ec2-18-212-192-225.compute-1.amazonaws.com:8080",
  });

  api.defaults.headers.common.Authorization = `Bearer ${cookies.endeavourToken}`;

  interface AxiosErrorReponse {
    code?: string;
  }

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<AxiosErrorReponse>) => {
      if (error) {
        if (error.response?.data?.code === "token.expired") {
          cookies = parseCookies(ctx);

          const { endeavourRefreshToken: refreshToken } = cookies;
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post("/refresh", { refreshToken })
              .then((response) => {
                const { token, refreshToken } = response.data;

                setCookie(ctx, "endeavourToken", token, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/",
                });

                setCookie(ctx, "endeavourRefreshToken", refreshToken, {
                  maxAge: 60 * 60 * 24 * 30,
                  path: "/",
                });

                // eslint-disable-next-line dot-notation
                api.defaults.headers.common.Authorization = `Bearer ${token}`;

                failedRequestsQueue.forEach((request: any) =>
                  request.onSuccess(token)
                );

                failedRequestsQueue = [];
              })
              .catch((err) => {
                failedRequestsQueue.forEach((request: any) =>
                  request.onFailure(err)
                );

                failedRequestsQueue = [];

                if (typeof window !== "undefined") {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (token: string) => {
                if (!originalConfig?.headers) {
                  return;
                }
                // eslint-disable-next-line dot-notation
                originalConfig.headers["Authorization"] = `Bearer ${token}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (typeof window !== "undefined") {
            signOut();
          } else {
            return Promise.reject(new AuthTokenError());
          }
        }
      }

      return Promise.reject(error);
    }
  );

  return api;
}
