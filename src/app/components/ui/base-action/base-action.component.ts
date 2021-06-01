import { Component, Input, OnInit } from '@angular/core';
import { map } from 'lodash';
import { LocalServiceService } from '@myproject/service/local-service/local-service.service';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-base-action',
  templateUrl: './base-action.component.html',
  styleUrls: ['./base-action.component.less']
})
export class BaseActionComponent implements OnInit {

  private _config: any = {};
  public value: any;
  public optionList: any[];

  @Input() viewModel: any;

  @Input()
  set config(obj) {
    this._config = obj;

    if (!!obj) {
      this.initObject()
    }
  }

  get config() {
    return this._config;
  }


  constructor(public ls: LocalServiceService) { }

  ngOnInit() {
  }

  initObject() {

    this.loadValue();
    this.loadData();
  }

  loadData() {
    const { getOptionList } = this.config;

    forkJoin(map(getOptionList , (actionName) => {
      return this.ls.getService(actionName).trigger();
    })).subscribe((...data: any) => {
      this.optionList = [].concat.apply([], ...data);
    })
  }

  loadValue() {
    let { bindData } = this.config;
    this.value = this.viewModel[bindData];
    console.log("🚀 ~ file: base-action.component.ts ~ line 56 ~ BaseActionComponent ~ loadValue ~ this.value", this.value);
    
  }

  loadFunction(actionName, value) {
    let { action } = this.config;
    map(action, (item) => {
      if (item.type === actionName) {
        let event = this.ls.getService(item.actionName);
        event.invoke(this, value);
      }
    })
  }

  onchange(value) {
    console.log("🚀 ~ file: base-action.component.ts ~ line 69 ~ BaseActionComponent ~ onchange ~ value", value)
    this.loadFunction('change', value);
  }
}
