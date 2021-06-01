import { Injectable } from '@angular/core';
import { BaseActionService } from './baseAction.service';

export class ChangeRadioService extends BaseActionService {

  constructor() { 
    super()
  }

  trigger(value) {

    console.log(this.viewModel)
  }

}
