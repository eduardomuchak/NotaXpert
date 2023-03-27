export namespace Backlog {
  export interface BacklogContent {
    vim: string;
    tipo: string;
    status: string;
    prioridade: string;
    agente: string;
    adicionado: string;
    vencimento: string;
    motivo: string;
    nome: string;
  }

  export interface BacklogTableBody {
    backlog: BacklogContent[];
  }
}
