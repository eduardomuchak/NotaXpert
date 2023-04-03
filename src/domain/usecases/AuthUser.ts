import { User } from "domain/entities/User";

export type InputDTO = {
  user: string;
  password: string;
};

export type OutputDTO = {
  user: User;
  token: string;
};

export interface AuthUser {
  execute(data: InputDTO): Promise<OutputDTO | null>;
}
