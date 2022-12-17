import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';
import { CalandarDay } from '../utils/calandar-day';
import { DayOfTheWeek } from '../utils/day-of-the-week.enum';
import { WeekDay } from '@angular/common';

@Injectable()
export class TodoService {
  rows = [0, 1, 2, 3];
  columns = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calandarDays: CalandarDay[] = new Array(28);

  emptyTodos = [
    { id: 0, week: 0, day: 'Sun', todoList: [] },
    { id: 1, week: 0, day: 'Mon', todoList: [] },
    { id: 2, week: 0, day: 'Tue', todoList: [] },
    { id: 3, week: 0, day: 'Wed', todoList: [] },
    { id: 4, week: 0, day: 'Thu', todoList: [] },
    { id: 5, week: 0, day: 'Fri', todoList: [] },
    { id: 6, week: 0, day: 'Sat', todoList: [] },
    { id: 7, week: 1, day: 'Sun', todoList: ['Get Money', 'fuck bitches'] },
    { id: 8, week: 1, day: 'Mon', todoList: [] },
    { id: 9, week: 1, day: 'Tue', todoList: [] },
    { id: 10, week: 1, day: 'Wed', todoList: [] },
    { id: 11, week: 1, day: 'Thu', todoList: [] },
    { id: 12, week: 1, day: 'Fri', todoList: [] },
    { id: 13, week: 1, day: 'Sat', todoList: [] },
    { id: 14, week: 2, day: 'Sun', todoList: [] },
    { id: 15, week: 2, day: 'Mon', todoList: [] },
    { id: 16, week: 2, day: 'Tue', todoList: [] },
    { id: 17, week: 2, day: 'Wed', todoList: [] },
    { id: 18, week: 2, day: 'Thu', todoList: [] },
    { id: 19, week: 2, day: 'Fri', todoList: [] },
    { id: 20, week: 2, day: 'Sat', todoList: [] },
    { id: 21, week: 3, day: 'Sun', todoList: [] },
    { id: 22, week: 3, day: 'Mon', todoList: [] },
    { id: 23, week: 3, day: 'Tue', todoList: [] },
    { id: 24, week: 3, day: 'Wed', todoList: [] },
    { id: 25, week: 3, day: 'Thu', todoList: [] },
    { id: 26, week: 3, day: 'Fri', todoList: [] },
    { id: 27, week: 3, day: 'Sat', todoList: [] },
  ];
  constructor() {
    var i = 0;
    this.calandarDays.forEach((element) => {
      element.id = i;
      element.week = i % 4;
      element.todos = [];
      i++;
    });
  }
  getTodos() {
    return this.emptyTodos;
  }
  getColumns() {
    return this.columns;
  }
  getRows() {
    return this.rows;
  }
}
