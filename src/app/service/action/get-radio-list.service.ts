import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetRadioListService {
  constructor() {}

  trigger() {

    return of([{
      name: '一号任务',
      value: '1'
    },{
      name: '二号任务',
      value: '2'
    }])
  }
}
