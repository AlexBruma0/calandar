import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  providers: [TodoService],
})
export class CalendarComponent {
  columns: any;
  rows: any;
  todos: any;
  show: boolean[] = new Array(28);

  constructor(private todoService: TodoService) {
    this.show.forEach((element) => (element = false));
    this.columns = todoService.getColumns();
    this.rows = todoService.getRows();
    this.todos = todoService.getTodos();
  }
  Show(index: number) {
    this.show[index] = true;
  }
  hide(index: number) {
    this.show[index] = false;
  }
}
