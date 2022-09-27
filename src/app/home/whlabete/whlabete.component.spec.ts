import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhlabeteComponent } from './whlabete.component';

describe('WhlabeteComponent', () => {
  let component: WhlabeteComponent;
  let fixture: ComponentFixture<WhlabeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhlabeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhlabeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
