import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { DetailPageComponent } from './page/detail-page/detail-page.component';

const routes: Routes = [
  {
    path: 'index',
    component: HomePageComponent
  },
  {
    path: 'detail',
    component: DetailPageComponent
  },
  {
    path: '',
    component: HomePageComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
