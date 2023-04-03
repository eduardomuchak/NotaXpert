import { HttpPostClient } from "./../http/HttpPostClient";
import { AuthUser, InputDTO, OutputDTO } from "domain/usecases/AuthUser";
import { AuthInvalid } from "domain/errors/AuthInvalid";

import { v4 as uuid } from "uuid";

export class AuthUserHttp implements AuthUser {
  constructor(private readonly httpPostClient: HttpPostClient) {}

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
        id: "1",
        name: "John Doe",
        email: "johndoe@email.com.br",
      },
      token: uuid(),
    };
  }
}
