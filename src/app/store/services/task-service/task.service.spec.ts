import { TestBed, inject } from '@angular/core/testing';

import * as AppStore from '../../../app.store';
import { TaskService } from './task.service';

const testTask: AppStore.ITask = {
    id: '3',
    created: new Date(),
    content: 'This is a single task-item',
    complete: false
};

describe('TaskService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [TaskService]
        });
    });

    it('should be created', inject([TaskService], (service: TaskService) => {
        expect(service).toBeTruthy();
    }));

    it('should return mock data', inject([TaskService], (service: TaskService) => {
        service.getTasks().subscribe(result => expect(result.length).toEqual(2));
    }));
});
