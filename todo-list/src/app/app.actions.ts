import { createAction, createActionGroup, props } from '@ngrx/store';

// action creators
// export const addTask = createAction('add-task', props<{ text: string }>());
// export const toggleCompleted = createAction(
//   'toggle-completed',
//   props<{ id: number }>()
// );
// export const removeTask = createAction('remove-task', props<{ id: number }>());

export const TaskActions = createActionGroup({
  source: 'Task',
  events: {
    'Add Task': props<{ text: string }>(),
    'Toggle Completed': props<{ id: number }>(),
    'Remove Task': props<{ id: number }>(),
  },
});
