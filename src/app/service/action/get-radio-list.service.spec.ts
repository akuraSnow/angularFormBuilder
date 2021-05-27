/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetRadioListService } from './get-radio-list.service';

describe('Service: GetRadioList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRadioListService]
    });
  });

  it('should ...', inject([GetRadioListService], (service: GetRadioListService) => {
    expect(service).toBeTruthy();
  }));
});
