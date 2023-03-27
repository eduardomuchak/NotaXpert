import { Task } from 'domain/entities/Task';
import { BoardUI } from 'presentation/ui/BoardUI';
import { Header } from 'presentation/ui/Header';

const Board = () => (
  <>
    <Header />
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
  </>
);

export default Board;
