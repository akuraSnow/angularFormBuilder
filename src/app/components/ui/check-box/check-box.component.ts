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
    console.log('e: ', e);
    
    let vlaue = cloneDeep(this.value);
    let hasValue = vlaue.indexOf(e.value);
    
    if(hasValue > -1) {
      vlaue.splice(hasValue);
    } else {
      vlaue.push(e.value);

    }
    console.log('vlaue: ', vlaue);
    this.onchange(vlaue);
  }

}
