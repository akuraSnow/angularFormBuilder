/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetCheckboxListService } from './get-checkbox-list.service';

describe('Service: GetCheckboxList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetCheckboxListService]
    });
  });

  it('should ...', inject([GetCheckboxListService], (service: GetCheckboxListService) => {
    expect(service).toBeTruthy();
  }));
});
