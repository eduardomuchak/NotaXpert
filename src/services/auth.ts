import { v4 as uuid } from "uuid";

export type SigninRequestData = {
  email: string;
  password: string;
};

const delay = (ms = 750) => new Promise((resolve) => setTimeout(resolve, ms));

export async function signinRequest(data: SigninRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "John Doe",
      email: "johndoe@email.com.br",
    },
  };
}
