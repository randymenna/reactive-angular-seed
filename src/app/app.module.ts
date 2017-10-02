import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { reducers } from './app.store';
import { TaskEffects } from './store/task/task.effects';

import { TasksModule } from './components/tasks/tasks.module';

import { AppComponent} from './app.component';

import { TaskService } from './services/task-service/task.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25}) : [],
        FormsModule,
        ReactiveFormsModule,
        TasksModule,
        EffectsModule.forRoot([TaskEffects])
    ],
    providers: [
        TaskService
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
