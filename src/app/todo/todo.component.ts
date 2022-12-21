import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './data-access/todo.service';

import { todo } from './data-access/todo.model';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  todoList$: Observable<todo[]> = new Observable()

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoList$ = this.todoService.todoList$.pipe(
      tap(
        data => {
          console.log('From Subscriber')
          console.log(data)
        }
      )
    )
  }

  onTodoCheck(currentTodo: todo) {
    let updatedTodo: todo = structuredClone(currentTodo)
    updatedTodo.isDone = !updatedTodo.isDone
    this.todoService.updateTodoList(updatedTodo)
  }
}