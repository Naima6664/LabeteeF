import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobMapComponent } from './job-map.component';

describe('JobMapComponent', () => {
  let component: JobMapComponent;
  let fixture: ComponentFixture<JobMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
