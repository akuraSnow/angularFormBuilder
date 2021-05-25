import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ComponentsModule }　from '@myproject/components/app.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PageModule { }
