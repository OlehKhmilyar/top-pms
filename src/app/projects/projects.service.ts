import { Project, Member, Task } from '../common/protocols';
import { TasksService } from '../tasks/tasks.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {

    public projects: Array<Project> = [
        {
            id: 0,
            name: 'VizLocal',
            type: 'web',
            owner: 'Marian BB',
            members: new Array<Member>(),
            tasks: new Array<Task>()
        },
        {
            id: 1,
            name: 'Elicall',
            type: 'mobile',
            owner: 'Volodia DD',
            members: new Array<Member>(),
            tasks: new Array<Task>()
        },
        {
            id: 2,
            name: 'Divtricks',
            type: 'web',
            owner: 'Volodia DD',
            members: new Array<Member>(),
            tasks: new Array<Task>()
        }
    ];

    constructor() {}

    public getProjectById(id: number): Project {
        return this.projects.find(project => project.id === id);
    }

    public createProject(name: string, owner: string, type: string): void {
        this.projects.push({
            id: this.getMaxId() + 1,
            name: name,
            owner: owner,
            type: type,
            members: new Array<Member>(),
            tasks: new Array<Task>()
        })
    }

    public updateProject(updatedProject: Project): void {
        const project = this.getProjectById(updatedProject.id);
        const index = this.projects.indexOf(project);
        this.projects[index] = updatedProject;
    }

    public deleteProject(project: Project): void {
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1);
    }

    public updateProjectTask(project: Project, task: Task) {
        project.tasks.push(task);
    }

    private getMaxId(): number {
        let maxId: number = 0;
        for(let project of this.projects) {
            maxId = project.id > maxId ? project.id : maxId;
        }
        return maxId;
    }
  
  }