import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { serviceList, allServices } from './index';
import { SERVICE_TOKEN_LIST } from "@myproject/model/injectToken/index"
import { LocalServiceService } from "./local-service/local-service.service";

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [],
  providers: [
    ...allServices,
    {
      provide: SERVICE_TOKEN_LIST,
      multi: true,
      useValue: serviceList
    },
  ],

})
export class ServiceModule {


}
