import { createReducer, on } from '@ngrx/store';
import { TaskActions } from './app.actions';

import { TodoListState } from './todo-list-state';
import { Task } from './task';

const INITIAL_STATE: Task[] = [
  { id: 1, text: 'Learn Angular', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
];

export const tasks = createReducer(
  INITIAL_STATE,

  on(TaskActions.addTask, (state, { text }) => {
    const maxId = state.length ? state[state.length - 1].id : 0;
    return [...state, { id: maxId + 1, text }];
  }),

  on(TaskActions.toggleCompleted, (state, { id }) => {
    return state.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
  }),

  on(TaskActions.removeTask, (state, { id }) => {
    return state.filter((task) => task.id !== id);
  })
);

// selectors
export const selectTasks = (state: TodoListState) => state.tasks;
export const selectTask = (state: TodoListState, id: number) =>
  state.tasks.find((task) => task.id === id);
