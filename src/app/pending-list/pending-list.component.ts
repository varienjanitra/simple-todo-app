import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo/data-access/todo.service';
import { todo } from '../todo/data-access/todo.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-pending-list',
  standalone: true,
  imports: [CommonModule],
  providers: [TodoService],
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.scss']
})
export class PendingListComponent {

  pendingList$ = new Observable<todo[]>

  constructor(private todoService: TodoService) {}

  ngDoCheck() {
    console.log('Log')
    this.pendingList$ = this.todoService.todoList$
      .pipe(
        map(data => data.filter(todo => todo.isDone === false))
      )
  }
}
