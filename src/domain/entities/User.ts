export namespace User {
  export interface Props {
    readonly id: string;
    name: string;
    email: string;
  }
}

export class User {
  public readonly id: string;
  public name: string;
  public email: string;

  constructor(props: User.Props) {
    Object.assign(this, props);
  }
}
