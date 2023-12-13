import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.taskService.refetch.pipe(
    switchMap(() => this.taskService.getTasks())
  );

  constructor(private taskService: TaskService) {}

  handleSpanClick(task: Task) {
    this.taskService.toggleCompleted(task).subscribe();
  }

  handleButtonClick(task: Task) {
    this.taskService.removeTask(task).subscribe();
  }
}
