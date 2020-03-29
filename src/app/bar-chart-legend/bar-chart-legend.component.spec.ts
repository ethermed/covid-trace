import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartLegendComponent } from './bar-chart-legend.component';

describe('BarChartLegendComponent', () => {
  let component: BarChartLegendComponent;
  let fixture: ComponentFixture<BarChartLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarChartLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
