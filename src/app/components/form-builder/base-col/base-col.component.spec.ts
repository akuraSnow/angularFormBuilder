/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BaseColComponent } from './base-col.component';

describe('BaseColComponent', () => {
  let component: BaseColComponent;
  let fixture: ComponentFixture<BaseColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
