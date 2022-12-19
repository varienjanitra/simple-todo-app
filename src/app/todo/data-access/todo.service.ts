import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { todoListDummy } from './todo.dummy';

import { todo } from './todo.model';

@Injectable()
export class TodoService {

  private todoList: todo[] = todoListDummy
  
  todoList$: Observable<todo[]> = new Observable<todo[]>((subscriber) => {
    subscriber.next(this.todoList)
  })

  constructor() { }

  updateTodoList(updatedTodo: todo): void {
    this.todoList.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
  }
}
