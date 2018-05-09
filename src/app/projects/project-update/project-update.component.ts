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
  paramsSubscription: Subscription;

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
      this.project = this.projectsService.getProjectById(+params['id']);
    });
  }

  private onUpdate(form: NgForm): void {
    if (form.value.name !== '' && form.value.owner !== '' && form.value.type !== '') {
      this.projectsService.updateProject(this.project, this.project.id, form.value.name,
        form.value.owner, form.value.type);
    }
    this.router.navigate(['/projects']);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
