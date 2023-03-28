import { Task } from 'domain/entities/Task';
import { BoardUI } from 'presentation/ui/BoardUi';
import { Header } from 'presentation/ui/Header';
import { PageContainer } from 'presentation/ui/PageContainer';
import { PageTitle } from 'presentation/ui/PageTitle';

const Board = () => (
  <>
    <Header />
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
  </>
);

export default Board;
