import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

import * as AppStore from '../../app.store';

// mock data
const testTasks: Array<AppStore.ITask> = [
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

    getTasks(): Observable<Array<AppStore.ITask>> {
        return Observable.of(testTasks).delay(2000)
            .map(result => result);
    }

    addTask(task: AppStore.ITask) {
        // send the new task-item to the server
        return Observable.of(task).delay(2000)
            .map(result => result);
    }
}
