import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { Advisories } from '../../../api/advisories/advisories.model';
import { AdvisoriesService } from '../../../api/advisories/advisories.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  advisory$: Observable<Advisories>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private advisoriesService: AdvisoriesService
  ) {}

  ngOnInit(): void {
    this.advisory$ = this.route.params.pipe(
      pluck('id'),
      switchMap((id) =>
        this.advisoriesService.getAdvisoriesById(this.router.url, id)
      )
    );
  }
}
