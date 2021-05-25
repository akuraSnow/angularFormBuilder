import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-action',
  templateUrl: './base-action.component.html',
  styleUrls: ['./base-action.component.less']
})
export class BaseActionComponent implements OnInit {

  @Input() viewModel: any;

  @Input() config: any;

  get value() {

    return this.viewModel[this.config['bindData']]
  }

  constructor() { }

  ngOnInit() {
  }

}
