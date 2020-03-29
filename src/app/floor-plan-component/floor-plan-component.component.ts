import { Component, OnInit } from '@angular/core';
import { SampleLocationData } from '../utils/data-sample';
import { IHospitalZone, IVizElement } from '../models/data';
import { HeatMapVizManager } from '../utils/heatmap-viz-manager';

@Component({
  selector: 'app-floor-plan-component',
  templateUrl: './floor-plan-component.component.html',
  styleUrls: ['./floor-plan-component.component.scss']
})
export class FloorPlanComponentComponent implements OnInit {
  private data: IHospitalZone[];
  private vizElements: IVizElement<IHospitalZone>[];
  constructor() { }

  ngOnInit() {
    this.buildViz();
  }

  private buildViz() {
    const vizManager = new HeatMapVizManager('vizContainer');
    vizManager.addFloorPlan('/assets/floorplan.png');
    this.getDataSet();
    vizManager.drawDataPoints(this.vizElements);
    vizManager.addHeatMap(this.vizElements);
  }

  private getDataSet() {
    this.data = SampleLocationData;
    this.vizElements = SampleLocationData.map(z => {
      const el: IVizElement<IHospitalZone> = new IVizElement(z);
      return el;
    });
  }

}
