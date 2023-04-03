import { Task } from 'domain/entities/Task';
import { BoardUI } from 'presentation/components/ui/BoardUi';
import { PageContainer } from 'presentation/components/PageContainer';
import { PageTitle } from 'presentation/components/PageTitle';

const Board = () => (
  <PageContainer>
    <PageTitle>Board</PageTitle>
    <BoardUI
      fetchTask={{
        async execute() {
          return [
            new Task({
              name: 'Atividade 1',
              status: 'Em andamento',
            }),
            new Task({
              name: 'Atividade 2',
              status: 'Em andamento',
            }),
          ];
        },
      }}
    />
  </PageContainer>
);

export default Board;
