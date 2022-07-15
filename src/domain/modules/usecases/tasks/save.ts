import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../repositories/tasks.repository';
import { Tasks } from '../../entities/tasks';

@Injectable()
export class SaveTasks {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async call(payload: Tasks): Promise<Tasks> {
    return await this.tasksRepository.save(payload);
  }
}
