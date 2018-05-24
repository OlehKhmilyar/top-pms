import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProjectsService } from './projects.service';
import { Project } from '../common/protocols';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {

  }

  ngOnInit() {
    this.projectsService.getProjects().then(data => {
      console.log(data);
    });
  }

  getProjectDetailsURL(project: Project): Array<String> {
    return ['/projects/' + project.id];
  }

  getProjectUpdateURL(project: Project): Array<String> {
    return ['/projects/update/' + project.id];
  }

  deleteProject(project: Project): void {
    this.projectsService.deleteProject(project);
  }

}
