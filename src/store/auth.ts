import { create } from "zustand";
import { signinRequest, SigninRequestData } from "../services/auth";
import { setCookie } from "nookies";

type AuthState = {
  isAuthenticated: boolean;
  setIsAuthenticated: any;
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
  setIsAuthenticated: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated })),

  signin: async ({ email, password }: SigninRequestData) => {
    const { token, user } = await signinRequest({ email, password });
    setCookie(undefined, "token", token, {});
  },
}));
