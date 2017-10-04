/**
 * Example of kinds of state
 */
export interface ITask {
    id: string;
    created: Date;
    content: string;
    complete: boolean;
}

export type TaskArray = ITask[];

export type TaskFilter =
    'All'
    | 'Complete'
    | 'Pending';

export interface ITaskFilter {
    filter: TaskFilter;
}

// Tasks State
//
export interface ITasksState {
    taskListTitle: string;
    filter: TaskFilter;
    tasks: ITask[];
    loading: boolean;
    error: string;
}

export const emptyTasksArray: ITask[] = [];

export const initialState: ITasksState = {
    taskListTitle: 'Things to Do',
    filter: 'All',
    tasks: emptyTasksArray,
    loading: false,
    error: ''
};

export const defaultAction = {
    type: 'NO_ACTION'
};
