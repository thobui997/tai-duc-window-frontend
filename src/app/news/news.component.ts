import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Advisories } from '../api/advisories/advisories.model';
import { AdvisoriesService } from '../api/advisories/advisories.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  currentUrl: string;
  advisories$: Observable<Advisories[]>;
  constructor(
    private router: Router,
    private advisoriesService: AdvisoriesService
  ) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.advisories$ = this.advisoriesService.getAllAdvisories(this.currentUrl);
  }
}
