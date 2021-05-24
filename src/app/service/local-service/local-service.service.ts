import { Injectable, Inject, Type, Injector } from '@angular/core';
import { SERVICE_TOKEN_LIST } from "@myproject/model/injectToken/index"
import { COMPONENT_TOKEN_LIST } from "@myproject/model/injectToken/index";

@Injectable()
export class LocalServiceService {

  constructor(
    private injector: Injector,
    @Inject(SERVICE_TOKEN_LIST) public allServiceList: any,
    @Inject(COMPONENT_TOKEN_LIST) public componentsList: any,
  ) { }

  getService(name: string): any{
    let service =  this.getAction(name, this.allServiceList);
    return this.injector.get(service);
  }

  getComponent(name: string) {
    let service =  this.getAction(name, this.componentsList);
    return service;
  }

  private getAction(name: string, List: any) {
    let newList = List.flat(Infinity);
    let checkService = newList.filter((obj) => obj.name === name);
    return checkService.length > 0 ? checkService[checkService.length - 1].type : null;
  }
  
}
