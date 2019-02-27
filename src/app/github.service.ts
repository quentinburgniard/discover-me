import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Github } from './github';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) { }

  getGithub(): Observable<Github> {
    const url = 'https://api.quentinburgniard.com/github'
    return this.http.get<Github>(url)
  }
}
