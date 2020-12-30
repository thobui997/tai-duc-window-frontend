import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  currentUrl: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }
}
