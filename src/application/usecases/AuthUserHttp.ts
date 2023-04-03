import { User } from "domain/entities/User";
import { HttpPostClient } from "./../http/HttpPostClient";
import { AuthUser, InputDTO, OutputDTO } from "domain/usecases/AuthUser";
import { AuthInvalid } from "domain/errors/AuthInvalid";

export class AuthUserHttp implements AuthUser {
  constructor(private readonly httpPostClient: HttpPostClient) {}

  async execute(data: InputDTO): Promise<OutputDTO | null> {
    const response = await this.httpPostClient.post("/users", data);

    if (!response) {
      throw new AuthInvalid();
    }

    return {
      user: new User(response.user),
      token: response.token,
    };
  }
}
