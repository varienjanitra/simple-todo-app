import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../data-access/todo.service';
import { todo } from '../../data-access/todo.model'
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-done-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.scss']
})
export class DoneListComponent {

  doneList$ = new Observable<todo[]>

  constructor(private todoService: TodoService) {

  }
  
  ngOnInit() {
    this.doneList$ = this.todoService.todoList$
      .pipe(
        map(data => data.filter(todo => todo.isDone === true))
      )
  }
}
