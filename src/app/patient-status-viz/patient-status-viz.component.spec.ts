import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStatusVizComponent } from './patient-status-viz.component';

describe('PatientStatusVizComponent', () => {
  let component: PatientStatusVizComponent;
  let fixture: ComponentFixture<PatientStatusVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientStatusVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientStatusVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
