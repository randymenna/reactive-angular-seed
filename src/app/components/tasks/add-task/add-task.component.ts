import {Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTaskComponent implements OnInit {
    control: FormControl = new FormControl('');
    @Output() add = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }
}
