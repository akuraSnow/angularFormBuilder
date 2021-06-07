import { LocalServiceService } from '@myproject/service/local-service/local-service.service';
import { Component, OnInit } from '@angular/core';
import { BaseActionComponent } from '../base-action/base-action.component';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.less']
})
export class CheckBoxComponent extends BaseActionComponent  implements OnInit {

  constructor(public ls: LocalServiceService) {
    super(ls)
  }

  ngOnInit(): void {
  }

  setValue(e: any) {
    
    let value = cloneDeep(this.value);
    let hasValue = value.indexOf(e.value);
    
    if(hasValue > -1) {
      value.splice(hasValue, 1);
    } else {
      value.push(e.value);
    }
    
    this.onchange(value);

  }
}
