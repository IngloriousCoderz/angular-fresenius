import type { Meta, StoryObj } from '@storybook/angular';
import { ListComponent } from './list.component';

const meta: Meta<ListComponent> = {
  title: 'TodoList/List',
  component: ListComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ListComponent>;

export const Default: Story = {
  args: {},
};

export const WithTasks: Story = {
  args: {
    tasks: [
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ],
  },
};
