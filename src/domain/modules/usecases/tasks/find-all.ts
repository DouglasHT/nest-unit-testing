import { Injectable } from '@nestjs/common';
import { TasksRepository } from '../../../repositories/tasks.repository';
import { Tasks } from '../../entities/tasks';

@Injectable()
export class FindAllTasks {
  constructor(private readonly tasksRepository: TasksRepository) {}

  async call(): Promise<Tasks[]> {
    return await this.tasksRepository.findAll();
  }
}
