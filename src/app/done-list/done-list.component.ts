import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo/data-access/todo.service';
import { todo } from '../todo/data-access/todo.model';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-done-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    TodoService
  ],
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent implements OnInit {

  todoList$ = new Observable<todo[]>

  constructor(private todoService: TodoService) {

  }
  
  ngOnInit() {
    this.todoList$ = this.todoService.getTodoList()
  }
}
