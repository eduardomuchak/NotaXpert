import { v4 as uuid } from 'uuid';

export type SigninRequestData = {
  email: string;
  password: string;
};

const delay = (ms = 750) => new Promise((resolve) => setTimeout(resolve, ms));

// eslint-disable-next-line no-unused-vars
export async function signinRequest(data: SigninRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'John Doe',
      email: 'johndoe@email.com.br',
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'John Doe',
      email: 'johndoe@email.com.br',
    },
  };
}
