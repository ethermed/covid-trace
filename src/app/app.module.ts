import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FloorPlanComponentComponent } from './floor-plan-component/floor-plan-component.component';
import { PatientStatusVizComponent } from './patient-status-viz/patient-status-viz.component';
import { BarChartLegendComponent } from './bar-chart-legend/bar-chart-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    FloorPlanComponentComponent,
    PatientStatusVizComponent,
    BarChartLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
