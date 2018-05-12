import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {

  constructor(private tasksService: TasksService, private router: Router) { }

  onCreate(form: NgForm) {
    if (form.value.name !== '' && form.value.type !== '') {
      this.tasksService.createTask(form.value.name, form.value.type);
    }
    this.router.navigate(['/tasks']);
  }

}
