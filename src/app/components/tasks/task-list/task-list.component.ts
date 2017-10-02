import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ITask} from '../../../app.store';

@Component({
    moduleId: module.id,
    selector: 'task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() tasks: ITask[] = [];
    @Output() toggle = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

}
