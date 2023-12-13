import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TodoListState } from '../todo-list-state';
import { TaskActions } from '../app.actions';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  form;

  constructor(private fb: FormBuilder, private store: Store<TodoListState>) {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handleSubmit() {
    this.store.dispatch(
      TaskActions.addTask({ text: this.form.value.text || '' })
    );
    this.form.patchValue({ text: '' });
  }
}
