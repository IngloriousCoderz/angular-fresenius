import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  text?: string | null;
  completed?: boolean | null;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Matteo Antony';

  text = '';

  tasks = [
    { id: 1, text: 'Learn Angular', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ];

  getId(index: number, item: Task): number {
    return item.id;
  }

  handleSubmit() {
    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, text: this.text });
    this.text = '';
  }

  handleSpanClick(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  handleButtonClick(index: number) {
    this.tasks.splice(index, 1);
  }
}
