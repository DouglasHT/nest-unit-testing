import { Module } from '@nestjs/common';
import { FindAllTasks } from './find-all';
import { FindByIdTasks } from './find-by-id';
import { SaveTasks } from './save';

@Module({
  providers: [SaveTasks, FindAllTasks, FindByIdTasks],
  exports: [SaveTasks, FindAllTasks, FindByIdTasks],
})
export class TasksModule {}
