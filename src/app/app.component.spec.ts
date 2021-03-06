import {TestBed, async} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Store, StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';

import {reducers} from './app.store';

import {AppHeaderComponent} from './components/app-header/app-header.component';
import {TasksModule} from './components/tasks/tasks.module';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.forRoot(reducers),
                TasksModule,
                RouterTestingModule
            ],
            providers: [
                Store
            ],
            declarations: [
                AppHeaderComponent,
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
