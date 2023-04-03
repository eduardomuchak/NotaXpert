import { create } from "zustand";
import { OutputDTO } from "domain/usecases/AuthUser";
import { User } from "domain/entities/User";

type AuthState = {
  token: string | null;
  user: User | null;
  signin(payload: OutputDTO): void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  signin: (payload) => {
    set(payload);
  },
}));
