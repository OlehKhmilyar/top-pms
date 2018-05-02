export interface Project {
    name: String;
    type: String;
    owner: String;
    members: Array<Member>;
}

export interface Member {
    name: String;
}