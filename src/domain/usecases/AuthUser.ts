import { User } from 'domain/entities/User';

export type InputDTO = {
  email: string;
  password: string;
};

export type OutputDTO = {
  user: User;
  token: string;
};

export interface AuthUser {
  // eslint-disable-next-line no-unused-vars
  execute(data: InputDTO): Promise<OutputDTO | null>;
}
