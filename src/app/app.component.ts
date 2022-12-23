import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoService } from './todo/data-access/todo.service';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    TodoComponent
  ],
  providers: [
    TodoService
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
