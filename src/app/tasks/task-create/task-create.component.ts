import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';
import { ProjectsService } from '../../projects/projects.service';
import { Task } from '../../common/protocols';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  constructor(
    private tasksService: TasksService,
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  onCreate(form: NgForm) {
    if (form.value.name !== '' && form.value.type !== '' && form.value.project) {
      const task: Task = this.tasksService.createTask(form.value.name, form.value.type);
      this.projectsService.updateProjectTask(form.value.project, task);
    }
    this.router.navigate(['/tasks']);
  }

}
