import { Component, Input, OnInit } from '@angular/core';
import { BaseActionComponent } from '../base-action/base-action.component';
@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent extends BaseActionComponent implements OnInit {


  constructor() {
    super()
  }

  ngOnInit(): void {

  }

}
