import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { reducers, ITasksState, ITask } from '../../app.store';

import { TaskComponent } from './task-item/task-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TasksComponent } from './tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';


const testTasks: ITask[] = [
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

const testError = 'This is a loading error';

const testTaskState: ITasksState = {
    taskListTitle: 'task-item list title',
    filter: 'All',
    tasks: testTasks,
    loading: true,
    error: testError
};

const TestAppState = {
    tasks: testTaskState
};

describe('TasksComponent', () => {
    let component: TasksComponent;
    let fixture: ComponentFixture<TasksComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(reducers),
                ReactiveFormsModule,
                FormsModule
            ],
            providers: [
                Store
            ],
            declarations: [
                TaskComponent,
                TaskListComponent,
                TasksComponent,
                AddTaskComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TasksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
