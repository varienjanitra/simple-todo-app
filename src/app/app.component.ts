import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { DoneListComponent } from './todo/ui/done-list/done-list.component';
import { PendingListComponent } from './todo/ui/pending-list/pending-list.component';
import { AddTodoComponent } from './todo/ui/add-todo/add-todo.component';
import { TodoService } from './todo/data-access/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent,
    DoneListComponent,
    PendingListComponent,
    AddTodoComponent
  ],
  providers: [
    TodoService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
