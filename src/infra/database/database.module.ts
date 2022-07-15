import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from '../../domain/repositories/tasks.repository';
import { Tasks } from './entities/tasks.entity';
import { TasksImpl } from './impl/tasks.impl';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Tasks])],
  providers: [{ provide: TasksRepository, useClass: TasksImpl }],
  exports: [TasksRepository],
})
export class DatabaseModule {}
