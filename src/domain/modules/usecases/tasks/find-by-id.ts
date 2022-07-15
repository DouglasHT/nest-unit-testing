import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../repositories/tasks.repository';
import { Tasks } from '../../entities/tasks';

@Injectable()
export class FindByIdTasks {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async call(id: number): Promise<Tasks> {
    return await this.tasksRepository.findById(id);
  }
}
