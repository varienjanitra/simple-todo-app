import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { todoListDummy } from './todo.dummy';

import { todo } from './todo.model';

/**
 * Todo Service for sharing application state
 * While this comment might be obvious for some experienced Angular programmer
 * But because I am still learning, so it might be worthwhile to keep this finding written here
 * So that I would not forget this finding
 * 
 * A shared service like this Todo Service SHALL BE:
 * 1. A singleton provided in the root, meaning that the @'injectable decorator shall be provided in root
 * https://angular.io/guide/singleton-services#providing-a-singleton-service
 * and EACH component requiring this service shall be requesting the service via dependency injection,
 * NOT in providers list
 * 
 * Failure to do so WILL cause the service to be instantiated multiple times thus FAILURE in sharing the application state
 */

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 
  _todoList$: BehaviorSubject<todo[]> = new BehaviorSubject<todo[]>(todoListDummy)
  todoList$ = this._todoList$.asObservable()

  constructor() { }

  updateTodoList(updatedTodo: todo): void {
    let updatedTodoList = this._todoList$.value.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo)
    this._todoList$.next(updatedTodoList)
  }

  addTodo(newTodoTask: string): void {
    let updatedTodoList = structuredClone(this._todoList$.value)

    updatedTodoList.push({
      id: this._todoList$.value.length + 1, 
      task: newTodoTask, isDone: 
      false
    })

    this._todoList$.next(updatedTodoList)
  }

  deleteTodo(deletedTodo: todo): void {
    let updatedTodoList = structuredClone(this._todoList$.value)

    updatedTodoList = updatedTodoList.filter(todo => todo.id !== deletedTodo.id)

    this._todoList$.next(updatedTodoList)
  }
}
