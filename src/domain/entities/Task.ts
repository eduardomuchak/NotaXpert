export namespace Task {
  export type Status = 'Em andamento' | 'Finalizada';
  export interface Props {
    name: string;
    status: Status;
  }
}

// eslint-disable-next-line no-redeclare
export class Task {
  public name: string;
  public status: Task.Status = 'Em andamento';

  constructor(props: Task.Props) {
    Object.assign(this, props);
    /**
     * this.name = props.name
     * this.status = props.status
     */
  }

  close() {
    this.status = 'Finalizada';
  }
}
