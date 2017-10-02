import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TaskComponent} from '../task-item/task-item.component';

import {TaskListComponent} from './task-list.component';

describe('TaskListComponent', () => {
    let component: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TaskComponent,
                TaskListComponent,
                TestHostComponent
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestHostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    @Component({
        selector: `test-host-component`,
        template: `
            <task-list [tasks]="testTasks"></task-list>`
    })
    class TestHostComponent {
        testTasks = [
            {
                id: 1,
                created: new Date(),
                content: 'test content 1',
                complete: false
            },
            {
                id: 2,
                created: new Date(),
                content: 'test content 2',
                complete: false
            },
            {
                id: 3,
                created: new Date(),
                content: 'test content 3',
                complete: false
            }
        ];
    }
});
