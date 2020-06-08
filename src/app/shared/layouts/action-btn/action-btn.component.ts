import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss']
})
export class ActionBtnComponent implements OnInit {

  @Input() icon: string = null;
  @Input() label: string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
