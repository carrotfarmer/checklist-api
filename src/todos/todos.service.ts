import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/Todo.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async getAllTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTodoById(id: number): Promise<Todo> {
    return await this.todoRepository.findOne(id);
  }

  async createTodo(todo: Todo): Promise<Todo> {
    return await this.todoRepository.save(todo);
  }

  async updateTodo(id: string, todo: Todo): Promise<UpdateResult> {
    return await this.todoRepository.update({ id: id }, todo);
  }

  async deleteTodo(id: string): Promise<DeleteResult> {
    if (await this.todoRepository.findOne(id)) {
      return await this.todoRepository.delete(id!);
    } else {
      console.error('Entry not found!');
    }
  }
}
