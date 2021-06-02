import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { LocalServiceService } from '../local-service/local-service.service';

@Injectable()
export class BaseActionService {
  _viewModel: any;
  _hash: any;

  set viewModel(model: any) {

    let viewModel = {
      ...this._viewModel,
      ...model
    };  
    this._viewModel = viewModel;
    this.ls.getService('baseData').viewModel = viewModel;

  }

  get viewModel() {

    let data = this.ls.getService('baseData').getViewModel(this._hash);
    return data;
  }


  constructor(protected ls: LocalServiceService) { }

  invoke(self) {

    this._hash = self.hash;

    return this.trigger();

  }

  trigger(params?: any): void | any {};



}
