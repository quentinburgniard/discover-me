import { Component, OnInit, Input } from '@angular/core';


import { Github } from '../github';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {
  @Input() github: Github;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getGithub();
  }

  getGithub(): void {
    this.githubService.getGithub()
      .subscribe(github => this.github = github);
  }
}
