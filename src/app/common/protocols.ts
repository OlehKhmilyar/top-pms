export interface Project {
    id: number;
    name: string;
    type: string;
    owner: string;
    members: Array<Member>;
    tasks: Array<Task>;
}

export interface Member {
    name: string;
}

export interface Task {
    id: number;
    type: string;
    name: string;
}