import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';
import { Task } from '../common/protocols';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(private tasksService: TasksService) { }

  getTaskDetailsURL(task: Task): Array<String> {
    return ['/tasks/' + task.id];
  }

  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task);
  }

}
