/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WalkersListComponent } from './walkers-list.component';

describe('WalkersListComponent', () => {
  let component: WalkersListComponent;
  let fixture: ComponentFixture<WalkersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
