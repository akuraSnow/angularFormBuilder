/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeRadioService } from './change-radio.service';

describe('Service: ChangeRadio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeRadioService]
    });
  });

  it('should ...', inject([ChangeRadioService], (service: ChangeRadioService) => {
    expect(service).toBeTruthy();
  }));
});
