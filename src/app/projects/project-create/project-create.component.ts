import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProjectsService } from '../projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent {

  constructor(private projectsService: ProjectsService, private router: Router) { }

  onCreate(form: NgForm) {
    if (form.value.name !== '' && form.value.owner !== '' && form.value.type !== '') {
      this.projectsService.createProject(form.value.name, form.value.owner, form.value.type)
        .then(data => this.router.navigate(['/projects'])
      );
    }
  }

}
