export class AuthInvalid extends Error {
  constructor() {
    super("Usuario ou senha incorreto");
    this.name = "AuthInvalid";
  }
}
