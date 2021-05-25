import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/app.module';
import { ServiceModule } from './service/service.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageModule } from './page/page.module';
import { HomePageComponent } from './page/home-page/home-page.component'
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ServiceModule,
    BrowserAnimationsModule,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
