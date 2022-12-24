import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../data-access/todo.service';

import { todo } from '../../data-access/todo.model';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

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

  onTodoCheck(checkedTodo: todo) {
    let updatedTodo: todo = structuredClone(checkedTodo)
    updatedTodo.isDone = !updatedTodo.isDone
    this.todoService.checkTodo(updatedTodo)
  }

  onTodoDelete(currentTodo: todo) {
    let deletedTodo: todo = structuredClone(currentTodo)
    this.todoService.deleteTodo(deletedTodo)
  }
}