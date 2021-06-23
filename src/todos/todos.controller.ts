import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import TodoDto from 'src/dto/Todo.dto';
import { Todo } from 'src/entities/Todo.entity';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todosService.getAllTodos();
  }

  @Get(':todoId')
  getTodoById(@Param('todoId') todoId): Promise<Todo> {
    return this.todosService.getTodoById(todoId);
  }

  @Post()
  createTodo(@Body() createTodoDto: Todo): Promise<Todo> {
    return this.todosService.createTodo(createTodoDto);
  }

  @Put(':todoId')
  updateTodo(@Param('todoId') todoId, @Body() updateTodoDto: Todo) {
    return this.todosService.updateTodo(todoId, updateTodoDto);
  }

  @Delete(':todoId')
  deleteTodo(@Param('todoId') todoId: string) {
    return this.todosService.deleteTodo(todoId);
  }
}
