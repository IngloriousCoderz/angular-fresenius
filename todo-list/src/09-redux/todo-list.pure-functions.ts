import { Task } from './task';

export function addTask(state: Task[], text: string) {
  const maxId = state.length ? state[state.length - 1].id : 0;
  return [...state, { id: maxId + 1, text }];
}

export function toggleCompleted(state: Task[], id: number) {
  // clone
  // const clone = [...state];
  // const index = clone.findIndex((task) => task.id === id);
  // clone[index].completed = !clone[index].completed;
  // return clone;

  // sandwich
  // const index = state.findIndex((task) => task.id === id);
  // return [
  //   ...state.slice(0, index),
  //   { ...state[index], completed: !state[index].completed },
  //   ...state.slice(index + 1),
  // ];

  // array method
  return state.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
}

export function removeTask(state: Task[], id: number) {
  // clone
  // const clone = [...state];
  // const index = clone.findIndex((task) => task.id === id);
  // clone.splice(index, 1);
  // return clone;

  // sandwich
  // const index = state.findIndex((task) => task.id === id);
  // return [...state.slice(0, index), ...state.slice(index + 1)];

  // array method
  return state.filter((task) => task.id !== id);
}
