import { IFields } from './../../models/i-response-tasks';
import { Component, OnInit, Input } from '@angular/core';
import { IResponseValues } from 'src/app/models/i-response-tasks';
import { ITaskWeek } from 'src/app/models/i-task-week';
import * as moment from 'moment';

@Component({
  selector: 'app-task-body',
  templateUrl: './task-body.component.html',
  styleUrls: ['./task-body.component.scss']
})
export class TaskBodyComponent implements OnInit {

  @Input() week: ITaskWeek[] = [];
  @Input() tasks: IResponseValues[] = [];
  currentDate = moment().format('L');

  constructor() { }

  ngOnInit(): void {
  }

  getTask(date: Date): IResponseValues[] {
    const d = moment(date).subtract(1, 'days').format('L');
    let fields: IResponseValues[] = [];

    if (this.tasks && this.currentDate === d) {
      fields = this.tasks.filter(task => {
        if (task.fields['System.State'] === 'New') {
          return task.fields;
        }
      });
    }
    return fields;
  }

}
