import {Action} from '@ngrx/store';
import {uuid} from '../../../util/uuid';
import {ITask, TaskFilter} from './task.model';

// These are all the actions that can be performed on the Tasks state

// Add a new task-item to the tasks array
//
export const ADD_TASK = '[Task] Add';
export interface IAddTaskAction extends Action {
    task: ITask;
}
export function taskAdd(task: string): IAddTaskAction {
    const defaults = {
        id: uuid(),
        created: new Date(),
    };
    const taskItem: ITask = Object.assign({}, defaults, {content: task, complete: false});

    return {
        type: ADD_TASK,
        task: taskItem
    };
}

// clear new task-item form
export const CLEAR_NEW_TASK = '[Task] Clear New';
export function taskClearNew(): Action {
    return {
        type: CLEAR_NEW_TASK
    };
}

// Filter tasks list
//
export const FILTER_TASKS = '[Task] Filter';
export interface ITaskFilterAction extends Action {
    filter: TaskFilter;
}
export function taskFilter(filter: TaskFilter): ITaskFilterAction {
    return {
        type: FILTER_TASKS,
        filter: filter
    };
}

// Toggle the complete state for a single task-item in the tasks array
//
export const TOGGLE_TASK = '[Task] Toggle Complete';
export interface ITaskToggleAction extends Action {
    id: string;
}
export function taskToggle(id: string): ITaskToggleAction {
    return {
        type: TOGGLE_TASK,
        id: id,
    };
}


// Get tasks from a server
//

// call the server
export const GET_TASKS = '[Task] Get';
export function tasksGet(): Action {
    return {
        type: GET_TASKS
    };
}

// load the successful response
export const LOAD_TASKS = '[Task] Load';
export interface ITaskLoadAction extends Action {
    tasks: ITask[];
}
export function tasksLoad(tasks: ITask[]): ITaskLoadAction {
    return {
        type: LOAD_TASKS,
        tasks: tasks
    };
}

// show the error
export const LOAD_TASKS_ERROR = '[Task] Load Error';
export interface ITaskLoadErrorAction extends Action {
    error: string;
}
export function tasksLoadError(error: string): ITaskLoadErrorAction {
    return {
        type: LOAD_TASKS_ERROR,
        error: error
    };
}
