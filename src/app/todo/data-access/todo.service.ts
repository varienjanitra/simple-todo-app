import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { todo } from './todo.model';

@Injectable()
export class TodoService {

  constructor() { }

  todoList: todo[] = [
    {id: 1, task: 'Learn Physics', isDone: false},
    {id: 2, task: 'Have Dinner', isDone: false},
    {id: 3, task: 'Write Thesis', isDone: false},
    {id: 4, task: 'Contact Old Friends', isDone: false},
    {id: 5, task: 'Sweep Living Room', isDone: false},
    {id: 6, task: 'Repair Car', isDone: false},
    {id: 7, task: 'Perform Daily Maintenance', isDone: false},
    {id: 8, task: 'Play Games', isDone: false},
    {id: 9, task: 'Make Dinner', isDone: false},
    {id: 10, task: 'Prepare Tomorrow Presentation', isDone: false},
  ]

  private _todoList$: Subject<todo[]> = new BehaviorSubject(this.todoList)
  public todoList$ = this._todoList$.asObservable()

  getTodoList(): Observable<todo[]> {
    return this.todoList$
  }

  updateTodoList(updatedTodoList: todo[]): void {
    this._todoList$.next(updatedTodoList)
  }
}
