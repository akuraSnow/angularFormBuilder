import { Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { LocalServiceService } from '../../local-service/local-service.service';

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

    this.ls.getService('baseData').setViewModel(viewModel, this._hash);

  }

  get viewModel() {

    let data = this.ls.getService('baseData').getViewModel(this._hash);
    return data;
  }


  constructor(protected ls: LocalServiceService) { }

  invoke(self, value) {

    this._hash = self.hash;
    this.viewModel = self.viewModel;

    return this.trigger(value);

  }

  trigger(params?: any): void | any {};



}
