import { Injectable } from '@angular/core';

export abstract class BaseActionService {

  viewModel: any

  constructor() { }

  invoke() {

    return this.trigger();

  }

  abstract trigger(params?: any): void | any;


}
