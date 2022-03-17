import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazy-load-image',
  templateUrl: './lazy-load-image.component.html',
  styleUrls: ['./lazy-load-image.component.css']
})
export class LazyLoadImageComponent implements OnInit, OnDestroy {

  @Input() url: string;

  @Input() height = 180;

  @ViewChild('img', {static: true}) imgEl: ElementRef<HTMLImageElement>;

  private imgCurrent: HTMLImageElement;

  private intersectionObserver: IntersectionObserver;

  constructor() {
  }

  ngOnInit(): void {
    this.imgCurrent = this.imgEl.nativeElement;
    this.intersectionObserver = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.imgCurrent.src = this.url;
      }
    });

    if (this.imgCurrent) {
      this.intersectionObserver.observe(this.imgCurrent);
    }
  }

  ngOnDestroy(): void {
    if (this.imgCurrent) {
      this.intersectionObserver.unobserve(this.imgCurrent);
    }
  }

}
