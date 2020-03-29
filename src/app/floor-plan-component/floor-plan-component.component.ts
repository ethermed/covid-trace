import { Component, OnInit } from '@angular/core';
import { VizManager } from '../utils/viz-manager';
import { SampleLocationData } from '../utils/data-sample';
import { IHospitalZone, IVizElement } from '../models/data';

@Component({
  selector: 'app-floor-plan-component',
  templateUrl: './floor-plan-component.component.html',
  styleUrls: ['./floor-plan-component.component.scss']
})
export class FloorPlanComponentComponent implements OnInit {
  private data: IHospitalZone[];
  private vizElements: IVizElement[];
  constructor() { }

  ngOnInit() {
    this.buildViz();
  }

  private buildViz() {
    const vizManager = new VizManager('vizContainer');
    vizManager.addFloorPlan('/assets/floorplan.png');
    this.getDataSet();
    vizManager.drawDataPoints(this.vizElements);
    vizManager.addHeatMap(this.vizElements);
  }

  private getDataSet() {
    this.data = SampleLocationData;
    this.vizElements = SampleLocationData.map(z => {
      const el: IVizElement = new IVizElement(z);
      return el;
    });
  }

}
