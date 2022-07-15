import { Body, Controller, Get, Post } from '@nestjs/common';
import { Tasks } from '../../domain/modules/entities/tasks';
import { FindAllTasks } from '../../domain/modules/usecases/tasks/find-all';
import { FindByIdTasks } from '../../domain/modules/usecases/tasks/find-by-id';
import { SaveTasks } from '../../domain/modules/usecases/tasks/save';

@Controller('tasks')
export class TasksController {
  constructor(
    private readonly saveTasks: SaveTasks,
    private readonly findAllTasks: FindAllTasks,
    private readonly findByIdTasks: FindByIdTasks,
  ) {}

  @Get()
  findAll(): Promise<Tasks[]> {
    return this.findAllTasks.call();
  }

  @Post()
  save(@Body() payload: Tasks): Promise<Tasks> {
    return this.saveTasks.call(payload);
  }

  @Get(':id')
  findById(id: number): Promise<Tasks> {
    return this.findByIdTasks.call(id);
  }
}
