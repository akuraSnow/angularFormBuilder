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
    
    let vlaue = cloneDeep(this.value);
    let hasValue = e.value.indexOf(vlaue);
    
    if(hasValue > -1) {
      vlaue.splice(hasValue);
    } else {
      vlaue.push(e.value);
    }

    this.onchange(vlaue);
  }

}
