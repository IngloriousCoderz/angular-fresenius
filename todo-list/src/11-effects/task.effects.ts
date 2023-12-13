import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { TaskActions } from './app.actions';
import { exhaustMap, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Store } from '@ngrx/store';
import { selectTasks } from './app.reducer';
import { TodoListState } from './todo-list-state';

@Injectable()
export class TaskEffects {
  fetchTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.fetchTasks),
      exhaustMap(() =>
        this.http
          .get<Task[]>('http://localhost:3000/tasks')
          .pipe(map((tasks) => TaskActions.receiveTasks({ tasks })))
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      exhaustMap(({ text }) =>
        this.http
          .post('http://localhost:3000/tasks', { text })
          .pipe(map(() => TaskActions.fetchTasks({})))
      )
    )
  );

  toggleCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.toggleCompleted),
      concatLatestFrom(() => this.store.select(selectTasks)),
      exhaustMap(([{ id }, tasks]) =>
        this.http
          .patch('http://localhost:3000/tasks/' + id, {
            completed: !tasks.find((task) => task.id === id)?.completed,
          })
          .pipe(map(() => TaskActions.fetchTasks({})))
      )
    )
  );

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.removeTask),
      exhaustMap(({ id }) =>
        this.http
          .delete('http://localhost:3000/tasks/' + id)
          .pipe(map(() => TaskActions.fetchTasks({})))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<TodoListState>,
    private http: HttpClient
  ) {}
}
