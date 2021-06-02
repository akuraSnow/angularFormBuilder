import { Injectable } from '@angular/core';
import { LocalServiceService } from '../local-service/local-service.service';
import { BaseActionService } from './baseAction.service';

@Injectable()
export class ChangeRadioService extends BaseActionService {

  constructor(protected ls: LocalServiceService) { 
    super(ls)
  }

  trigger(value) {
    console.log('value: ', value);

    // console.log('value: ', this.hash);

    this.viewModel = {
      checkbox: []
    }

    // console.log(this.viewModel)
  }

}
