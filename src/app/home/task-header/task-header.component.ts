import { Component, OnInit, Input } from '@angular/core';
import { ITaskWeek } from 'src/app/models/i-task-week';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {

  @Input() days: ITaskWeek[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
