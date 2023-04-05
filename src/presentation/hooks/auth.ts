import { create } from 'zustand';
import { setCookie } from 'nookies';
import Router from 'next/router';

import { InputDTO } from 'domain/usecases/AuthUser';
import { User } from 'domain/entities/User';
import { signinRequest } from 'services/auth';
import { UserFactory } from 'infra/factories/UserFactory';

type AuthState = {
  token: string | null;
  user: User | null;
  // eslint-disable-next-line no-unused-vars
  signin(payload: InputDTO): void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  signin: async (payload) => {
    const { token } = await signinRequest({
      email: payload.email,
      password: payload.password,
    });

    setCookie(undefined, 'sanofi-token', token, {
      maxAge: 60 * 60 * 1, // 1 hour
    });

    UserFactory.authUser.execute(payload).then((response) => {
      if (response) {
        set({ user: response.user, token: response.token });
      }
    });

    Router.push('/');
  },
}));
