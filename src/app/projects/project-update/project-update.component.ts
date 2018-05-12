import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Project } from '../../common/protocols';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-update',
  templateUrl: './project-update.component.html',
  styleUrls: ['./project-update.component.css']
})
export class ProjectUpdateComponent implements OnInit, OnDestroy {

  private project: Project = null;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getProject();
  }

  private getProject(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.project = JSON.parse(JSON.stringify(this.projectsService.getProjectById(Number(params['id']))));
    });
  }

  private onUpdate(): void {
    this.projectsService.updateProject(this.project);
    this.router.navigate(['/projects']);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
