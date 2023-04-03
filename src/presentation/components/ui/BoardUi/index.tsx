import { Task } from 'domain/entities/Task';
import { FetchTask } from 'domain/usecases/FetchTasks';
import { useEffect, useState } from 'react';

interface BoardUIProps {
  fetchTask: FetchTask;
}

export const BoardUI = (props: BoardUIProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    handleLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleLoad() {
    const result = await props.fetchTask.execute();
    setTasks(result);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};
