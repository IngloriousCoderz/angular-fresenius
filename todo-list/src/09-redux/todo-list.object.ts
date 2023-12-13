const INITIAL_TASKS = [
  { id: 1, text: 'Learn Angular', completed: true },
  { id: 2, text: 'Look for a job', completed: false },
  { id: 3, text: 'Forget everything' },
];

export const todoList = {
  tasks: [...INITIAL_TASKS],

  reset() {
    this.tasks = [...INITIAL_TASKS];
  },

  addTask(text: string) {
    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, text });
  },

  toggleCompleted(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].completed = !this.tasks[index].completed;
  },

  removeTask(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
  },
};
