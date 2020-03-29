import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-trace';

  constructor(private router: Router) {}

  routeToViz() {
    this.router.navigate(['floorplan']);
  }
}
