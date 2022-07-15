import { Tasks } from '../modules/entities/tasks';

export abstract class TasksRepository {
  save: (payload: Tasks) => Promise<Tasks>;
  findAll: () => Promise<Tasks[]>;
  findById: (id: number) => Promise<Tasks>;
}
