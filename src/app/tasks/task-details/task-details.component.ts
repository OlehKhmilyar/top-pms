import { Component, OnInit } from '@angular/core';
import { Task } from '../../common/protocols';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  private task: Task = null;
  paramsSubscription: Subscription;
  
  constructor(
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) { }

  ngOnInit() {
    this.getTask();
  }

  private getTask(): void {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.task = this.tasksService.getTaskById(Number(params['id']));
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
