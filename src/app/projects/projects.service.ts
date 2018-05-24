import { Project, Member, Task } from '../common/protocols';
import { HttpRequestor } from '../common/http-requestor';

import { Injectable } from '@angular/core';
import { Constants } from '../common/constans';

@Injectable()
export class ProjectsService {

    public projects: Array<Project> = [];

    constructor(private httpRequestor: HttpRequestor) {}

    public getProjects(): Promise<any> {
        //comment
        return this.httpRequestor.getRequest(Constants.ProjectsEndpoint).then(data => {
            this.projects = data;
            return this.projects;
        });
    }

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

    public deleteProjectTask(task: Task) {
        
    }

    private getMaxId(): number {
        let maxId: number = 0;
        for(let project of this.projects) {
            maxId = project.id > maxId ? project.id : maxId;
        }
        return maxId;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
  
  }