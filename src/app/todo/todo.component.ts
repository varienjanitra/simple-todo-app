import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './data-access/todo.service';

import { todo } from './data-access/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  providers: [
    TodoService
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoList$: Observable<todo[]> = new Observable()

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoList$ = this.todoService.getTodoList()
  }

  onTodoCheck(todo: todo) {
    todo.isDone = !todo.isDone
    this.todoService.updateTodoList(todo)
  }
}