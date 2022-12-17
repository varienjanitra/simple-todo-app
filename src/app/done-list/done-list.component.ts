import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo/data-access/todo.service';
import { todo } from '../todo/data-access/todo.model';
import { Observable, filter } from 'rxjs';

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

  doneTasks$: Observable<todo[]> = new Observable()

  constructor(private todoService: TodoService) {

  }
  
  ngOnInit(): void {
    this.doneTasks$ = this.todoService.getTodoList()
  }
}
