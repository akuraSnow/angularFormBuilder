import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService {

  _viewModelList: Object = {};



  observable = new Subject();

  setViewModel(model: any) {

    let { hash } = model;
    let _viewModel = this._viewModelList[hash] || {};
    console.log('hash: ', hash);

    let viewModel = {
      ..._viewModel,
      ...model
    };

    this._viewModelList[hash] = viewModel;
    this.observable.next(viewModel);

  }

  getViewModel() {
    return this._viewModelList;
  }

  constructor() { }


  getViewModelObj() {
    return  this.observable;
  }

}
