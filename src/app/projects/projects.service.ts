import { Project, Member } from '../common/protocols';

export class ProjectsService {

    public projects: Array<Project> = [
        {
            id: 0,
            name: 'VizLocal',
            type: 'web',
            owner: 'Marian BB',
            members: new Array<Member>()
        },
        {
            id: 1,
            name: 'Elicall',
            type: 'mobile',
            owner: 'Volodia DD',
            members: new Array<Member>()
        },
        {
            id: 2,
            name: 'Divtricks',
            type: 'web',
            owner: 'Volodia DD',
            members: new Array<Member>()
        }
    ];

    public getProjectById(id: number): Project {
        return this.projects.find(project => project.id === id);
    }

    public createProject(name: String, owner: String, type: String): void {
        let lastId = this.projects[this.projects.length-1].id;
        this.projects.push({
            id: ++lastId,
            name: name,
            owner: owner,
            type: type,
            members: new Array<Member>()
        })
    }

    public updateProject(project: Project, id: number, name: String, owner: String, type: String): void {
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1, {
            id: id,
            name: name,
            owner: owner,
            type: type,
            members: new Array<Member>()
        });
    }

    public deleteProject(project: Project): void {
        const index = this.projects.indexOf(project);
        this.projects.splice(index, 1);
    }
  
  }