/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseActionService } from './baseAction.service';

describe('Service: BaseAction', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseActionService]
    });
  });

  it('should ...', inject([BaseActionService], (service: BaseActionService) => {
    expect(service).toBeTruthy();
  }));
});
