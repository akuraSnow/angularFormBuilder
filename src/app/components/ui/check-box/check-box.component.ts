import { LocalServiceService } from '@myproject/service/local-service/local-service.service';
import { Component, OnInit } from '@angular/core';
import { BaseActionComponent } from '../base-action/base-action.component';
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

}
