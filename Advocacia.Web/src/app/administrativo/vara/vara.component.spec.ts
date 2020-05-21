/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VaraComponent } from './vara.component';

describe('VaraComponent', () => {
  let component: VaraComponent;
  let fixture: ComponentFixture<VaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
