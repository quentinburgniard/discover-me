import { Component, OnInit, Input } from '@angular/core';

import { Strava } from '../strava';
import { StravaService } from '../strava.service';

@Component({
  selector: 'app-strava',
  templateUrl: './strava.component.html',
  styleUrls: ['./strava.component.scss']
})
export class StravaComponent implements OnInit {
  @Input() strava: Strava;

  constructor(private stravaService: StravaService) { }

  ngOnInit() {
    this.getStrava();
  }

  getStrava(): void {
    this.stravaService.getStrava()
      .subscribe(strava => this.strava = strava);
  }
}
