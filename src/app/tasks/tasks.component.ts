import { Component, OnInit } from '@angular/core';

import { TasksService } from './tasks.service';
import { Task } from '../common/protocols';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor(
    private tasksService: TasksService,
    private projectsService: ProjectsService
  ) { }

  getTaskDetailsURL(task: Task): Array<String> {
    return ['/tasks/' + task.id];
  }

  getTaskUpdateURL(task: Task): Array<String> {
    return ['/tasks/update/' + task.id];
  }

  deleteTask(task: Task): void {
    this.tasksService.deleteTask(task);
    this.projectsService.deleteProjectTask(task);
  }

}
