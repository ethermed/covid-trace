import { Component, OnInit } from '@angular/core';
import { BarChartVizManager } from '../utils/bar-chart-viz-manager';
import { IVizElement, IStatusDatum } from '../models/data';
import { SampleAtRiskData } from '../utils/data-sample';

@Component({
  selector: 'app-patient-status-viz',
  templateUrl: './patient-status-viz.component.html',
  styleUrls: ['./patient-status-viz.component.scss']
})
export class PatientStatusVizComponent implements OnInit {

  data: IStatusDatum[];
  vizElements: IVizElement<IStatusDatum>[]

  constructor() { }

  ngOnInit() {
    const vizManager = new BarChartVizManager('barChartContainer');
    this.getDataSet();
    vizManager.buildScales(this.vizElements);
    vizManager.drawBackground();
    vizManager.drawDataValues();
  }

  getDataSet() {
    this.data = SampleAtRiskData;
    this.stackData(this.data);
    this.vizElements = SampleAtRiskData.map(z => {
      const el: IVizElement<IStatusDatum> = new IVizElement(z);
      return el;
    });
  }

  stackData(data: IStatusDatum[]) {
    // sort
    // data.sort((a, b) => {
    //   return a.count < b.count
    //     ? -1
    //     : a.count > b.count
    //       ? 1
    //       : 0;
    // });

    for(let i = 0; i < data.length; i++) {
      const curr = data[i];
      const prev = data[i-1]
      if (!prev) {
        curr.x1 = 0;
        curr.x2 = curr.count;
      } else {
        curr.x1 = prev.x2;
        curr.x2 = curr.x1 + curr.count;
      }
    }
  }

}
