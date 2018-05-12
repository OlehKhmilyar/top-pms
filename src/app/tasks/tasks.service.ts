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

}