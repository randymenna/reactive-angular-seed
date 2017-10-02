import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task-item/task-item.component';
import { AddTaskComponent } from './add-task/add-task.component';

import { TaskService } from '../../services/task-service/task.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        TasksComponent,
        TaskListComponent,
        TaskComponent,
        AddTaskComponent
    ],
    providers: [
        TaskService
    ],
    exports: [TasksComponent]
})
export class TasksModule {}

