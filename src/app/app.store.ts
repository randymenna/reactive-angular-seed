import {
    ActionReducerMap,
} from '@ngrx/store';

import { TaskReducer } from './store/task/task.reducer';
import { ITasksState } from './store/task/task.model';
export * from './store/task/task.reducer';
export * from './store/task/task.model';
export * from './store/task/task.actions';


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

