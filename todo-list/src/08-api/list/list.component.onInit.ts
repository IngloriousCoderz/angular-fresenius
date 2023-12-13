import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list-oninit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-oninit.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  handleSpanClick(task: Task) {
    this.taskService.toggleCompleted(task);
  }

  handleButtonClick(task: Task) {
    this.taskService.removeTask(task);
  }
}
