import { TodoList } from './todo-list.class';

describe('TodoList App - Class', () => {
  it('should add a new task', () => {
    const todoList = new TodoList();
    todoList.addTask('New task');

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ]);
  });

  it("should toggle the 'completed' state of a task given its id", () => {
    const todoList = new TodoList();
    todoList.toggleCompleted(2);

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });

  it('should remove a task given its id', () => {
    const todoList = new TodoList();
    todoList.removeTask(2);

    expect(todoList.tasks).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });
});
