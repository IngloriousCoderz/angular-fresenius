import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() formSubmit = new EventEmitter<string>();

  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handleSubmit() {
    this.formSubmit.emit(this.form.value.text || '');
    this.form.patchValue({ text: '' });
  }
}
