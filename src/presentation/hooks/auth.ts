import { create } from "zustand";
import { InputDTO, OutputDTO } from "domain/usecases/AuthUser";
import { User } from "domain/entities/User";
import { signinRequest } from "services/auth";
import { setCookie } from "nookies";

import { UserFactory } from "infra/factories/UserFactory";
import Router from "next/router";

type AuthState = {
  token: string | null;
  user: User | null;
  signin(payload: InputDTO): void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  signin: async (payload) => {
    const { token } = await signinRequest({
      email: payload.user,
      password: payload.password,
    });

    setCookie(undefined, "sanofi-token", token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    UserFactory.authUser.execute(payload).then((response) => {
      set({ user: response!.user, token: response!.token });
    });

    Router.push("/");
  },
}));
