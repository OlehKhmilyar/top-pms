import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../common/protocols';
import { ProjectsService } from '../projects.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

  private project: Project = null;
  private paramsSubscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.getProject();
  }

  private getProject(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.project = this.projectsService.getProjectById(Number(params['id']));
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
