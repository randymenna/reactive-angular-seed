import {Action, createFeatureSelector, createSelector} from '@ngrx/store';

import * as Model from './task.model';
import * as TaskActions from './task.actions';

export function TaskReducer(state: Model.ITasksState = Model.initialState, action: Action = Model.defaultAction): Model.ITasksState {
    switch (action.type) {

        // Adds a new taaks to the list of things to do
        case TaskActions.ADD_TASK: {
            const newTask = (<TaskActions.IAddTaskAction>action).task;
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            };
        }

        // Filters the list of tasks
        case TaskActions.FILTER_TASKS: {
            const filter = (<TaskActions.ITaskFilterAction>action).filter;
            return {
                ...state,
                filter: filter
            };
        }

        // Toggle completed for a specific task
        case TaskActions.TOGGLE_TASK: {
            const id = (<TaskActions.ITaskToggleAction>action).id;
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === id) {
                        return {...task, complete: !task.complete};
                    } else {
                        return task;
                    }
                })
            };
        }

        // Load tasks retrieved from server
        case TaskActions.GET_TASKS: {
            return {
                ...state,
                loading: true
            };
        }

        // Load tasks retrieved from server
        case TaskActions.LOAD_TASKS: {
            const tasks = (<TaskActions.ITaskLoadAction>action).tasks;
            return {
                ...state,
                tasks: tasks,
                loading: false
            };
        }

        // Set error when retieve from server fails
        case TaskActions.LOAD_TASKS_ERROR: {
            const error = (<TaskActions.ITaskLoadErrorAction>action).error;
            return {
                ...state,
                tasks: Model.emptyTasksArray,
                loading: false,
                error: error
            };
        }

        default:
            return state;
    }
}

export const selectTaskSet = createFeatureSelector<Model.ITasksState>('tasks');
export const getTaskArray = createSelector(selectTaskSet, (state: Model.ITasksState) => state.tasks);
export const getTaskLoading = createSelector(selectTaskSet, (state: Model.ITasksState) => state.loading);
export const getTaskError = createSelector(selectTaskSet, (state: Model.ITasksState) => state.error);



