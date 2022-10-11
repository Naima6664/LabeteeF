import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateMapComponent } from './candidate-map.component';

describe('CandidateMapComponent', () => {
  let component: CandidateMapComponent;
  let fixture: ComponentFixture<CandidateMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
