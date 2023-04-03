import { AuthUserHttp } from "application/usecases/AuthUserHttp";
import { AxiosHttpClient } from "infra/http/AxiosHttpClient";

const httpClient = new AxiosHttpClient();
const authUser = new AuthUserHttp(httpClient);

export class UserFactory {
  static authUser = authUser;
}
