import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import { ITask } from '../../models/task/task.model';

// mock data
const testTasks: Array<ITask> = [
    {
        id: '1',
        created: new Date(),
        content: 'This is a task-item',
        complete: false
    },
    {
        id: '2',
        created: new Date(),
        content: 'This is another task-item',
        complete: false
    }
];

@Injectable()
export class TaskService {

    constructor() {
    }

    getTasks(): Observable<Array<ITask>> {
        return Observable.of(testTasks).delay(2000)
            .map(result => result);
    }

    addTask(task: ITask) {
        // send the new task-item to the server
        return Observable.of(task).delay(2000)
            .map(result => result);
    }
}
