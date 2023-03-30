import { create } from "zustand";
import {
  signinRequest,
  SigninRequestData,
  recoverUserInformation,
} from "../services/auth";
import { setCookie, parseCookies } from "nookies";

import Router from "next/router";
import { api } from "services/api";

type AuthState = {
  isAuthenticated: boolean;
  signin: any;
  user: User | null;
};

type User = {
  name: string;
  email: string;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,

  signin: async ({ email, password }: SigninRequestData) => {
    const { token } = await signinRequest({ email, password });

    setCookie(undefined, "sanofi-token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    api.defaults.headers["Authorization"] = `Bearer ${token}`;

    const cookies = parseCookies();

    const sanofiToken = cookies["sanofi-token"];

    if (sanofiToken) {
      recoverUserInformation().then((response) => {
        set({ user: response.user, isAuthenticated: true });
      });
    }

    Router.push("/");
  },
}));
