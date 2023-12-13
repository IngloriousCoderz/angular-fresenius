import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';

/**
 * Task list component.
 */
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  /**
   * The tasks to be rendered.
   */
  @Input() tasks: Task[] = [];
  /**
   * Span click event.
   */
  @Output() spanClick = new EventEmitter<number>();
  /**
   * Button click event.
   */
  @Output() buttonClick = new EventEmitter<number>();

  handleSpanClick(index: number) {
    this.spanClick.emit(index);
  }

  handleButtonClick(index: number) {
    this.buttonClick.emit(index);
  }
}
