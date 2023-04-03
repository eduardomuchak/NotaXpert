export namespace User {
  export interface Props {
    readonly id: string;
    name: string;
    user: string;
  }
}

export class User {
  public readonly id: string;
  public name: string;
  public user: string;

  constructor(props: User.Props) {
    Object.assign(this, props);
  }
}
