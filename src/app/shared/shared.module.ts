import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ArticleDetailComponent } from './article-list/article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { LazyLoadImageComponent } from './lazy-load-image/lazy-load-image.component';

@NgModule({
  declarations: [
    CarouselComponent,
    ProductListComponent,
    JumbotronComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    SafeUrlPipe,
    LazyLoadImageComponent,
  ],
  imports: [CommonModule, MDBBootstrapModule.forRoot(), RouterModule, MarkdownModule.forChild()],
  exports: [
    CarouselComponent,
    ProductListComponent,
    MDBBootstrapModule,
    MarkdownModule,
    JumbotronComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    SafeUrlPipe,
    LazyLoadImageComponent
  ],
})
export class SharedModule {}
