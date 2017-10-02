import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'task-item',
    templateUrl: './task-item.component.html',
    styleUrls: ['./task-item.component.scss']
})
export class TaskComponent implements OnInit {
    @Input() task;
    @Output() toggle = new EventEmitter<string>();

    constructor() {
    }

    ngOnInit() {
    }
}
