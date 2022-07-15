import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomainModule } from './domain/domain.module';
import { DatabaseModule } from './infra/database/database.module';
import { PresentationModule } from './presentation/presentation.module';
import { DataBaseConnectionService } from './shared/database/db.connection';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DataBaseConnectionService,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    DomainModule,
    PresentationModule,
  ],
})
export class AppModule {}
