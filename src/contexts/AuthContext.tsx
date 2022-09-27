import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import Router from "next/router";
import { api } from "../services/apiClient";

type User = {
  id: number;
  email: string;
  name: string;
  lastName: string;
  tcsId: number;
};

type SignInCredentials = {
  email: string;
  senha: string;
};

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  user: User | undefined;
  isAuthenticated: boolean;
  loginFailMessage: string;
};

export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

interface AuthProviderProps {
  children: ReactNode;
}

export function signOut() {
  destroyCookie(undefined, "endeavourToken");
  destroyCookie(undefined, "endeavourRefreshToken");

  Router.push("/");
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;
  const [loginFailMessage, setLoginFailMessage] = useState<string>("");

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signIn":
          Router.push("/home");
          break;
        default:
          break;
      }
    };
  }, []);

  async function signIn({ email, senha }: SignInCredentials) {
    try {
      const response = await api.post("/login", {
        email,
        senha,
      });

      const { authorization } = response.headers;
      const token = authorization.slice(7, authorization.length);

      setCookie(undefined, "endeavourToken", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      const refreshResponse = await api.post("/auth/refresh_token", undefined, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const refreshTokenResponse = refreshResponse.headers.authorization;
      const refreshToken = refreshTokenResponse.slice(7, authorization.length);

      setCookie(undefined, "endeavourRefreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      const usersList = await api.get("/users");
      const filteredUser = usersList.data.filter((user?: any) => {
        return email === user.email;
      });

      // eslint-disable-next-line dot-notation
      api.defaults.headers.common.Authorization = `Bearer ${token}`;

      const id = filteredUser[0].id;

      const usersListId = await api.get(`/users/${id}`);
      console.log(usersListId);

      const name = filteredUser[0].firstName;
      const lastName = filteredUser[0].lastName;
      const tcsId = filteredUser[0].tcsId;

      setUser({
        id,
        email,
        name,
        lastName,
        tcsId,
      });

      setLoginFailMessage("");
      Router.push("/home");
      authChannel.postMessage("signIn");
    } catch (err) {
      setLoginFailMessage(
        "Invalid Credentials, please check your ID and password"
      );
    }
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, loginFailMessage, signOut, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
