import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { todoListDummy } from './todo.dummy';

import { todo } from './todo.model';

@Injectable()
export class TodoService {

  private todoList: todo[] = todoListDummy
  
  private _todoList$: BehaviorSubject<todo[]> = new BehaviorSubject(this.todoList)
  public todoList$ = this._todoList$.asObservable()

  constructor() { }

  getTodoList(): Observable<todo[]> {
    return this.todoList$
  }

  updateTodoList(updatedTodo: todo): void {
    let todoIndex = this.todoList.findIndex(todo => todo.id == updatedTodo.id)
    this.todoList[todoIndex].isDone = updatedTodo.isDone
    
    this._todoList$.next(this.todoList)
  }
}
