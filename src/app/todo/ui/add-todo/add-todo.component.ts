import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../data-access/todo.service';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoListComponent {

  addedTodo: string = ''

  constructor(private todoService: TodoService) {}

  onAddTodo() {
    if(this.addedTodo !== '') {
      this.todoService.addTodo(this.addedTodo)
      this.addedTodo = ''
    }
  }
}
