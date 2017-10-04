import {
    ActionReducerMap,
} from '@ngrx/store';

import { TaskReducer } from './models/task/task.reducer';
import { ITasksState } from './models/task/task.model';
export * from './models/task/task.reducer';
export * from './models/task/task.model';
export * from './models/task/task.actions';


// State Interface
//
export interface IAppState {
    tasks: ITasksState;
}

// State reducers
//
export const reducers: ActionReducerMap<IAppState> = {
    tasks: TaskReducer
};
