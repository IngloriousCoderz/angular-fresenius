import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Input() tasks: Task[] = [];
  @Output() spanClick = new EventEmitter<number>();
  @Output() buttonClick = new EventEmitter<number>();

  handleSpanClick(index: number) {
    this.spanClick.emit(index);
  }

  handleButtonClick(index: number) {
    this.buttonClick.emit(index);
  }
}
