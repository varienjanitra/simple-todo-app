import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './ui/todo-list/todo-list.component';
import { DoneListComponent } from './ui/done-list/done-list.component';
import { PendingListComponent } from './ui/pending-list/pending-list.component';
import { AddTodoListComponent } from './ui/add-todo/add-todo.component';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    TodoListComponent,
    DoneListComponent,
    PendingListComponent,
    AddTodoListComponent
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

}
