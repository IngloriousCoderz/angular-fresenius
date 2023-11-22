import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  handleSpanClick(index: number) {
    this.taskService.toggleCompleted(index);
  }

  handleButtonClick(index: number) {
    this.taskService.removeTask(index);
  }
}
