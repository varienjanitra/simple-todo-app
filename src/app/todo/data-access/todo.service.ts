import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { todoListDummy } from './todo.dummy';

import { todo } from './todo.model';

@Injectable()
export class TodoService {

  constructor() { }

  todoList: todo[] = todoListDummy

  todoList$: BehaviorSubject<todo[]> = new BehaviorSubject(this.todoList)

  getTodoList(): Observable<todo[]> {
    return this.todoList$.asObservable()
  }

  updateTodoList(updatedTodo: todo): void {
    let todoIndex = this.todoList.findIndex(todo => todo.id == updatedTodo.id)
    this.todoList[todoIndex].isDone = updatedTodo.isDone
    
    this.todoList$.next(this.todoList)
  }
}
