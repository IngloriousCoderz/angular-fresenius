import { createReducer, on } from '@ngrx/store';
import { TaskActions } from './app.actions';

import { TodoListState } from './todo-list-state';
import { Task } from './task';

const INITIAL_STATE: Task[] = [];

export const tasks = createReducer(
  INITIAL_STATE,

  on(TaskActions.receiveTasks, (state, { tasks }) => {
    return tasks;
  })
);

// selectors
export const selectTasks = (state: TodoListState) => state.tasks;
