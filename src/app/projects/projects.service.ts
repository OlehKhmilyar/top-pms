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

    public createProject(name: String, owner: String, type: String) {
        let lastId = this.projects[this.projects.length-1].id;
        this.projects.push({
            id: ++lastId,
            name: name,
            owner: owner,
            type: type,
            members: new Array<Member>()
        })
    }
  
  }