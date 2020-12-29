import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [CarouselComponent, ProductListComponent],
  imports: [CommonModule, MDBBootstrapModule.forRoot()],
  exports: [CarouselComponent, ProductListComponent, MDBBootstrapModule],
})
export class SharedModule {}
