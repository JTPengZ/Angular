import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChild2Component } from './detail-child2.component';

describe('DetailChild2Component', () => {
  let component: DetailChild2Component;
  let fixture: ComponentFixture<DetailChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
