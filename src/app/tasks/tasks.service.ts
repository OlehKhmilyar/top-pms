import { Project, Member, Task } from '../common/protocols';
import { Injectable } from '@angular/core';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class TasksService {
    public tasks: Array<Task> = [
        {
            id: 11,
            name: 'task1',
            type: 'major'
        },
        {
            id: 12,
            name: 'task2',
            type: 'minor'
        },
        {
            id: 13,
            name: 'task3',
            type: 'bag-fix'
        }
    ];

    constructor() {}

    public getTaskById(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }

    public createTask(name: string, type: string): Task {
        const id = this.getMaxId() + 1;
        const task: Task = {
            id: id,
            type: type,
            name: name
        } 
        this.tasks.push(task);
        return task;
    }

    public updateProject(updatedTask: Task): void {
        const task = this.getTaskById(updatedTask.id);
        const index = this.tasks.indexOf(task);
        this.tasks[index] = updatedTask;
    }

    public deleteTask(task: Task): void {
        const index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    }

    private getMaxId(): number {
        let maxId: number = 0;
        for(let task of this.tasks) {
            maxId = task.id > maxId ? task.id : maxId;
        }
        return maxId;
    }

}