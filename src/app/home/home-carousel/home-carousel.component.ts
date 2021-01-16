import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../api/advisories/advisories.model';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css'],
})
export class HomeCarouselComponent implements OnInit {
  @Input() images: Image[];
  constructor() {}

  ngOnInit(): void {}
}
