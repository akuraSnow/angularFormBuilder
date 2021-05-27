import { Injectable } from '@angular/core';

@Injectable()
export class ChangeRadioService {

constructor() { }

  trigger(value) {

    console.log(value)
  }

}
