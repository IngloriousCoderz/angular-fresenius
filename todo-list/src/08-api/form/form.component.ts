import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handleSubmit() {
    this.taskService.addTask(this.form.value.text || '').subscribe();
    this.form.patchValue({ text: '' });
  }
}
