import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild3Component } from './home-child3.component';

describe('HomeChild3Component', () => {
  let component: HomeChild3Component;
  let fixture: ComponentFixture<HomeChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
