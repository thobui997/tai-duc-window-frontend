import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvisoriesService } from '../api/advisories/advisories.service';
import { Advisories } from '../api/advisories/advisories.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css'],
})
export class AdvisoryComponent implements OnInit {
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
