export namespace Status {
  type Status =
    | 'Backlog'
    | 'Em tratamento'
    | 'Com Solicitante'
    | 'Regras'
    | 'Concluído';

  export interface StatusProps {
    status: Status;
  }
}
