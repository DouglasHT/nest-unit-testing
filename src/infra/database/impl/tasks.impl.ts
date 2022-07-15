import { InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Tasks } from '../../../domain/modules/entities/tasks';

import { TasksRepository } from '../../../domain/repositories/tasks.repository';
import { Repository } from 'typeorm';
import { Tasks } from '../entities/tasks.entity';

export class TasksImpl implements TasksRepository {
  constructor(
    @InjectRepository(Tasks)
    private readonly tasksRepository: Repository<Tasks>,
  ) {}

  async save(payload: Tasks): Promise<Tasks> {
    try {
      return await this.tasksRepository.save(payload);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findAll(): Promise<Tasks[]> {
    try {
      return await this.tasksRepository.find();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async findById(id: number): Promise<Tasks> {
    try {
      return await this.tasksRepository.findOne(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
