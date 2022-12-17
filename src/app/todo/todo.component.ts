import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './data-access/todo.service';

import { todo } from './data-access/todo.model';
import { Observable } from 'rxjs';

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

  todoList: todo[] = []

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodoList().subscribe(
      list => this.todoList = list
    )
  }

  onTodoCheck(event: Event, todo: todo) {
    console.log('Todo id' + todo.id + ' was checked to ' + (<HTMLInputElement>event.target).checked)
    todo.isDone = !todo.isDone
    this.todoService.updateTodoList(this.todoList)
  }
}