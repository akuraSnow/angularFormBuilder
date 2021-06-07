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
  public value: any = "";
  public optionList: any[];

  @Input() viewModel: any;
  @Input() hash: string;

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
    this.loadDymicData();

  }

  loadData() {
    const { getOptionList } = this.config;

    forkJoin(map(getOptionList, (actionName) => {
      return this.ls.getService(actionName).trigger();
    })).subscribe((...data: any) => {
      this.optionList = [].concat.apply([], ...data);
    });
  }

  loadValue() {
    let { bindData } = this.config;

    this.ls.getService('baseData').setViewModel(this.viewModel, this.hash);

    this.value = this.viewModel[bindData];

  }

  loadDymicData() {

    let { bindData } = this.config;
    this.ls.getService('baseData').getViewModelObj(this.hash).subscribe((model) => {

      this.value = model[bindData];

    });
  }

  loadFunction(actionName, value) {
    let { action, bindData } = this.config;

    let cacheViewModel = this.ls.getService('baseData').getViewModel(this.hash);

    let newViewModel = {
      ...cacheViewModel,
      [bindData]: value,
    };

    this.viewModel = newViewModel;

    this.ls.getService('baseData').setViewModel(newViewModel, this.hash);

    map(action, (item) => {
      if (item.type === actionName) {
        let event = this.ls.getService(item.actionName);
        event.invoke(this, value);
      }
    });
  }

  onchange(value) {

    this.loadFunction('change', value);

  }


}
