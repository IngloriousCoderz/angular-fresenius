import {
  addTask,
  toggleCompleted,
  removeTask,
} from './todo-list.pure-functions';

describe('TodoList App - Pure Functions', () => {
  it('should add a new task', () => {
    // given
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const payload = 'New task';
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ];

    // when
    const state = addTask(stateBefore, payload);

    // then
    expect(state).toEqual(stateAfter);
  });

  it('should toggle the "completed" state on a task given its id', () => {
    // given
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const payload = 2;
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    // when
    const state = toggleCompleted(stateBefore, payload);

    // then
    expect(state).toEqual(stateAfter);
  });

  it('should remove a task given its id', () => {
    // given
    const stateBefore = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ];
    const payload = 2;
    const stateAfter = [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 3, text: 'Forget everything' },
    ];

    // when
    const state = removeTask(stateBefore, payload);

    // then
    expect(state).toEqual(stateAfter);
  });
});
