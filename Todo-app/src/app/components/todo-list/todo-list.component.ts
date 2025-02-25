import { FormsModule } from '@angular/forms';
import { Index } from './../../../../node_modules/path-scurry/node_modules/lru-cache/dist/commonjs/index.d';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  todo: string = '';
  setEditable: any = {
    isEditable: false,
    myIndex: -1,
  };

  onDelete(index: number) {
    this.tasks.splice(index, 1);
  }
  onEdit(index: number) {
    this.setEditable.isEditable = true;
    this.setEditable.myIndex = index;
    this.todo = this.tasks[index];
  }

  onCancel(index: number) {
    this.setEditable.isEditable = false;
    this.setEditable.myIndex = index;
  }

  onSave(index: number) {
    this.tasks[index] = this.todo;
    this.setEditable.isEditable = false;
  }
}
