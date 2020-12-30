import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductListComponent,
    JumbotronComponent,
    ArticleListComponent,
    ArticleDetailComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule.forRoot(), RouterModule],
  exports: [
    CarouselComponent,
    ProductListComponent,
    MDBBootstrapModule,
    JumbotronComponent,
    ArticleListComponent,
    ArticleDetailComponent
  ],
})
export class SharedModule {}
