import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../common/protocols';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  private project: Project = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.getProject();
    console.log(this.project.name);
  }

  private getProject(): void {
    const id: number = +this.activatedRoute.snapshot.params['id'];
    this.project = this.projectsService.getProjectById(id);
  }

}
