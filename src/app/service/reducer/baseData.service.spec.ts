/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseDataService } from './baseData.service';

describe('Service: BaseData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseDataService]
    });
  });

  it('should ...', inject([BaseDataService], (service: BaseDataService) => {
    expect(service).toBeTruthy();
  }));
});
