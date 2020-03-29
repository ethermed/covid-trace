import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IStatusDatum } from '../models/data';

@Component({
  selector: 'app-bar-chart-legend',
  templateUrl: './bar-chart-legend.component.html',
  styleUrls: ['./bar-chart-legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarChartLegendComponent implements OnInit {
  values: IStatusDatum[];

  @Input()
  set config(_values: IStatusDatum[]) {
    console.log('**legend values', _values);
    this.values = _values;
    this.detector.detectChanges();
  }

  constructor(public detector: ChangeDetectorRef) { }

  ngOnInit() {
  }

}
