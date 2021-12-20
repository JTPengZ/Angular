import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChild3Component } from './detail-child3.component';

describe('DetailChild3Component', () => {
  let component: DetailChild3Component;
  let fixture: ComponentFixture<DetailChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChild3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
