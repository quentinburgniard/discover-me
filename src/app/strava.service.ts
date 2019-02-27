import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Strava } from './strava';


@Injectable({
  providedIn: 'root'
})

export class StravaService {
  constructor(private http: HttpClient) { }

  getStrava(): Observable<Strava> {
    const url = 'http://localhost/strava'
    return this.http.get<Strava>(url)
  }
}


