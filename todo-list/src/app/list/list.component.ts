import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { Observable } from 'rxjs';
import { selectTasks } from '../app.reducer';
import { Store } from '@ngrx/store';
import { TaskActions } from '../app.actions';
import { TodoListState } from '../todo-list-state';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.store.select<Task[]>(selectTasks);

  constructor(private store: Store<TodoListState>) {}

  handleSpanClick(task: Task) {
    this.store.dispatch(TaskActions.toggleCompleted({ id: task.id }));
  }

  handleButtonClick(task: Task) {
    this.store.dispatch(TaskActions.removeTask({ id: task.id }));
  }
}
