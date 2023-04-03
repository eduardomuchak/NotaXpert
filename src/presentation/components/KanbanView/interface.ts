import { Backlog } from 'domain/entities/Backlog';

export namespace Kanban {
  export interface ColumProps {
    title: string;
    backlog: Backlog.BacklogContent[];
  }
  export interface BacklogKanbanProps {
    backlog: Backlog.BacklogContent[];
  }
}
