import { Module } from '@nestjs/common';
import { TasksModule } from './modules/usecases/tasks/tasks.module';

@Module({ imports: [TasksModule], exports: [TasksModule] })
export class DomainModule {}
