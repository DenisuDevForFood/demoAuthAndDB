import { Component, OnInit } from '@angular/core';
import {TaskService} from '../services/task.service';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  name = '';
  description = '';

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onSubmit() {
    if(this.name !== '' && this.description !== '') {
      this.taskService.addItem({name: this.name, description: this.description});
    }
  }
}
