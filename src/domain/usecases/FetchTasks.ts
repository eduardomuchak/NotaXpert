import { Task } from 'domain/entities/Task';

export interface FetchTask {
  execute(): Promise<Task[]>;
}
