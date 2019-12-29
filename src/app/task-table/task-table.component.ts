import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Task} from '../shared/task.model';
import {TaskService} from '../services/task.service';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})
export class TaskTableComponent implements OnInit {
  items: Observable<Task[]>;
  editState = false;
  itemToEdit: Task;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.items = this.taskService.getObservableTask();
  }

  deleteItem($event: MouseEvent, item: Task) {
    console.log('Item is:' + item.id);
    this.taskService.deleteItem(item);
  }

  editItem($event: MouseEvent, item: Task) {
    this.editState = true;
    this.itemToEdit = item;
  }

  updateItem(item: Task) {
    this.taskService.updateItem(item);
  }
}
