import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleDetailComponent } from '../shared/article-list/article-detail/article-detail.component';
import { NewsComponent } from './news.component';

const routes: Routes = [
  {
    path: 'tin-tuc-trong-nganh',
    children: [
      { path: ':id', component: ArticleDetailComponent },
      { path: '', component: NewsComponent },
    ],
  },
  {
    path: 'bao-gia-cua-nhom',
    children: [
      { path: ':id', component: ArticleDetailComponent },
      { path: '', component: NewsComponent },
    ],
  },
  {
    path: 'bao-gia-cua-cuon',
    children: [
      { path: ':id', component: ArticleDetailComponent },
      { path: '', component: NewsComponent },
    ],
  },
  {
    path: 'bao-gia-cua-kinh-cuong-luc',
    children: [
      { path: ':id', component: ArticleDetailComponent },
      { path: '', component: NewsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
