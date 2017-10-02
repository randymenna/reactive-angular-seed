import {Reducer, Selector} from 'redux-testkit';

import * as Task from './task.reducer';
import * as Action from './task.actions';
import * as Model from './task.model';

const testTasks: Model.ITask[] = [
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

const testTasks2: Model.ITask[] = [
    {
        id: '1',
        created: new Date(),
        content: 'This is a task-item',
        complete: true
    },
    {
        id: '2',
        created: new Date(),
        content: 'This is another task-item',
        complete: false
    }
];

const testError = 'This is a loading error';

const testTaskState: Model.ITasksState = {
    taskListTitle: 'task-item list title',
    filter: 'All',
    tasks: testTasks,
    loading: true,
    error: testError
};

const TestAppState = {
    tasks: testTaskState
};

describe('store/Task/reducer', () => {

    it('should have initial state', () => {
        expect(Task.TaskReducer()).toEqual(Model.initialState);
    });

    it('should not affect state', () => {
        const action = {type: 'NON_ACTION'};
        Reducer(Task.TaskReducer).expect(action).toReturnState(Model.initialState);
    });

    it('should add a task-item', () => {
        const task = 'test string';
        const result = Reducer(Task.TaskReducer).withState(Model.initialState).execute(Action.taskAdd(task));
        expect(result.tasks.length).toEqual(1);
        expect(result.tasks[0].content).toContain(task);
    });

    it('should change the filter', () => {
        const filter = 'Complete';
        Reducer(Task.TaskReducer).expect(Action.taskFilter(filter)).toReturnState({
            ...Model.initialState,
            filter: filter
        });
    });

    it('should set the loading flag on GET_TASKS', () => {
        Reducer(Task.TaskReducer).expect(Action.tasksGet()).toReturnState({...Model.initialState, loading: true});
    });

    it('should set the task-item array on successful server request', () => {
        Reducer(Task.TaskReducer).expect(Action.tasksLoad(testTasks)).toReturnState({
            ...Model.initialState,
            tasks: [...Model.initialState.tasks, ...testTasks]
        });
    });

    it('should set error on failed server request', () => {
        const error = 'the rest call failed';
        Reducer(Task.TaskReducer).expect(Action.tasksLoadError(error)).toReturnState({
            ...Model.initialState,
            error: error
        });
    });

    it('should toggle the complete flag in a task-item', () => {
        Reducer(Task.TaskReducer).withState(testTaskState).expect(Action.taskToggle('1')).toReturnState({
            ...testTaskState,
            tasks: testTasks2
        });
    });
});

describe('store/Task/selectors', () => {

    it('should get the Task list', () => {
        Selector(Task.getTaskArray).expect(TestAppState).toReturn(testTasks);
    });

    it('should get the Task list loading flag', () => {
        Selector(Task.getTaskLoading).expect(TestAppState).toReturn(true);
    });

    it('should get the Task list loading error', () => {
        Selector(Task.getTaskError).expect(TestAppState).toReturn(testError);
    });
});


