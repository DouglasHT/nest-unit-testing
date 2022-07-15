export class Tasks {
  id: number;

  task: string;

  done: boolean;

  createdAt: Date;

  updatedAt: Date;

  deletedAt: Date;

  constructor(task?: Partial<Tasks>) {
    this.id = task?.id;
    this.task = task?.task;
    this.done = task?.done;
    this.createdAt = task?.createdAt;
    this.updatedAt = task?.updatedAt;
    this.deletedAt = task?.deletedAt;
  }
}
