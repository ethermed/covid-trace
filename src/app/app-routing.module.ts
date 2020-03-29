import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FloorPlanComponentComponent } from './floor-plan-component/floor-plan-component.component';


const routes: Routes = [
  {
    path: 'floorplan',
    component: FloorPlanComponentComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
