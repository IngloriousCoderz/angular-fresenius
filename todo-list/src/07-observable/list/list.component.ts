import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  handleSpanClick(index: number) {
    this.taskService.toggleCompleted(index);
  }

  handleButtonClick(index: number) {
    this.taskService.removeTask(index);
  }
}
