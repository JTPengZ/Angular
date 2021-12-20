import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailChild1Component } from './detail-child1.component';

describe('DetailChild1Component', () => {
  let component: DetailChild1Component;
  let fixture: ComponentFixture<DetailChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
