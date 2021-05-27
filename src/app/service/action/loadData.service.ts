import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadDataService {
  constructor() {}

  trigger() {


    return {
      option: '2',
    };
  }
}
