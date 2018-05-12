import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../common/protocols';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  private task: Task = null;
  private paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.task = JSON.parse(JSON.stringify(this.tasksService.getTaskById(Number(params['id']))));
    });
  }

  private onUpdate(): void {
    this.tasksService.updateProject(this.task);
    this.router.navigate(['/tasks']);
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
