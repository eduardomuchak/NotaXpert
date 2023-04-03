import { KanbanColumn } from './KanbanColumn';
import { status } from './Status';
import { Kanban } from './interface';

interface KanbanViewProps {
  kanbanData: Kanban.BacklogKanbanProps;
}

export function KanbanView(props: KanbanViewProps) {
  return (
    <div className="w-full flex flex-row gap-6">
      {status.map((status) => (
        <KanbanColumn
          key={status}
          content={{
            backlog: props.kanbanData.backlog.filter(
              (nf) => nf.status === status,
            ),
            title: status,
          }}
        />
      ))}
    </div>
  );
}
