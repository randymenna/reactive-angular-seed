import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TaskService } from '../../services/task-service/task.service';
import { Store, Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

import { GET_TASKS, ADD_TASK, ITask, tasksLoad, tasksLoadError, taskClearNew, IAddTaskAction } from '../../app.store';

@Injectable()
export class TaskEffects {
    constructor(private actions$: Actions, private taskService: TaskService, private store: Store<any>) {
    }

    @Effect() getTodos$ = this.actions$.ofType<Action>(GET_TASKS)
        .switchMap(() =>
            this.taskService.getTasks()
                .switchMap((data: ITask[]) => Observable.of(tasksLoad(data)))
                .catch((e) => Observable.of(tasksLoadError(e))));


    @Effect() addTodo$ = this.actions$.ofType<IAddTaskAction>(ADD_TASK)
        .switchMap(() => Observable.of(taskClearNew()));
}

