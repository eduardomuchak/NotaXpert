import { AuthUserHttp } from "application/usecases/AuthUserHttp";
import { User } from "domain/entities/User";
import { AuthInvalid } from "domain/errors/AuthInvalid";

it("deve fazer a autenticação do user", async () => {
  const httpPostClient = {
    post: jest.fn(async () => {
      return {
        user: {
          id: "1",
          name: "any",
          user: "any",
        },
        token: "any token",
      };
    }),
  };
  const sut = new AuthUserHttp(httpPostClient);

  const payload = await sut.execute({ user: "any", password: "any" });

  expect(payload!.user.id).toBe("1");
  expect(payload!.user).toBeInstanceOf(User);
  expect(payload!.token).toBe("any token");
  expect(httpPostClient.post).toBeCalledTimes(1);
  expect(httpPostClient.post).toBeCalledWith("/users", {
    user: "any",
    password: "any",
  });
});

it("deve lançar um erro caso o usuario e senha esteja incorretos", () => {
  const httpPostClient = {
    post: jest.fn(async () => null),
  };
  const sut = new AuthUserHttp(httpPostClient);

  expect(
    async () => await sut.execute({ user: "any", password: "any" })
  ).rejects.toThrowError(AuthInvalid);
});
