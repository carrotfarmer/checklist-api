import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/Todo.entity';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'todoapi',
      entities: [Todo],
      synchronize: true,
    }),
    TodosModule,
  ],
})
export class AppModule {}
