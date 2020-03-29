import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorPlanComponentComponent } from './floor-plan-component.component';

describe('FloorPlanComponentComponent', () => {
  let component: FloorPlanComponentComponent;
  let fixture: ComponentFixture<FloorPlanComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloorPlanComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorPlanComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
