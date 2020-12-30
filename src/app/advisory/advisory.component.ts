import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-advisory',
  templateUrl: './advisory.component.html',
  styleUrls: ['./advisory.component.css'],
})
export class AdvisoryComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
