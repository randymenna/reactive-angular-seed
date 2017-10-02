import {TestBed, async} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';

import {reducers} from './app.store';

import {TasksModule} from './components/tasks/tasks.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(reducers),
                TasksModule
            ],
            providers: [
                Store
            ],
            declarations: [
                AppComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
