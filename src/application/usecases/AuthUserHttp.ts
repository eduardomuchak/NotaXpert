import { v4 as uuid } from 'uuid';

import { AuthUser, InputDTO, OutputDTO } from 'domain/usecases/AuthUser';

import { HttpPostClient } from './../http/HttpPostClient';
// import { AuthInvalid } from 'domain/errors/AuthInvalid';

export class AuthUserHttp implements AuthUser {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly httpPostClient: HttpPostClient) {}

  // eslint-disable-next-line no-unused-vars
  async execute(data: InputDTO): Promise<OutputDTO | null> {
    // const response = await this.httpPostClient.post("/users", data);

    // if (!response) {
    //   throw new AuthInvalid();
    // }

    // return {
    //   user: new User(response.user),
    //   token: response.token,
    // };

    return {
      user: {
        id: '1',
        name: 'John Doe',
        email: 'johndoe@email.com.br',
      },
      token: uuid(),
    };
  }
}
