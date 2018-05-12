import { Project, Member, Task } from '../common/protocols';

export class TasksService {
    public tasks: Array<Task> = [
        {
            id: 0,
            name: 'task1',
            type: 'major'
        },
        {
            id: 1,
            name: 'task2',
            type: 'minor'
        },
        {
            id: 2,
            name: 'task3',
            type: 'bag-fix'
        }
    ];

    public getTaskById(id: number): Task {
        return this.tasks.find(task => task.id === id);
    }

    public createTask(name: string, type: string): void {
        this.tasks.push({
            id: this.getMaxId() + 1,
            name: name,
            type: type
        })
    }

    private getMaxId(): number {
        let maxId: number = 0;
        for(let task of this.tasks) {
            maxId = task.id > maxId ? task.id : maxId;
        }
        return maxId;
    }

}