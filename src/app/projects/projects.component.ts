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

  getProjectDetailsURL(project: Project): Array<String> {
    return ['/projects/' + project.id];
  }

  getProjectUpdateURL(project: Project): Array<String> {
    return ['/projects/' + project.id + '/update'];
  }

  deleteProject(project: Project): void {
    this.projectsService.deleteProject(project.id);
  }

}
