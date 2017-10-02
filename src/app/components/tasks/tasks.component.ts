import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import {
    IAppState,
    ITasksState,
    tasksGet,
    taskToggle,
    taskAdd,
} from '../../app.store';

import { Observable } from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
    taskState$: Observable<ITasksState>;

    constructor(private store: Store<IAppState>) {
    }

    ngOnInit() {
        // request initial data
        this.store.dispatch(tasksGet());

        // subscribe to streams
        this.taskState$ = this.store.select('tasks');
    }

    toggle(taskId) {
        this.store.dispatch(taskToggle(taskId));
    }

    addTask(task) {
        this.store.dispatch(taskAdd(task));
    }
}
