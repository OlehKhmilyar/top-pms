import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from './projects.service';
import { Project } from '../common/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  constructor(private projectsService: ProjectsService) {

  }

  getProjectDetailsURL(project: Project) {
    return ['/projects/' + project.id];
  }

  deleteProject(project: Project) {
    this.projectsService.deleteProject(project.id);
  }

}
