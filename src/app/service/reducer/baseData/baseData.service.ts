import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  _viewModelList: Object = {};
  _observableObj = {};

  constructor() { }

  setViewModel(model: any, hash: string) {

    let _viewModel = this._viewModelList[hash] || {};
    let viewModel = {
      ..._viewModel,
      ...model
    };

    this._viewModelList[hash] = viewModel;
    this._observableObj[hash].next(viewModel);
  }

  getViewModel = (hash) => this._viewModelList[hash]

  setViewModelObj(hash) {
    this._observableObj[hash] = new Subject();
  }

  getViewModelObj = (hash) => this._observableObj[hash]

}
