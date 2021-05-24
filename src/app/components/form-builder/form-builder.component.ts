import { Component, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilderService } from '@myproject/service/form-builder/form-builder.service';

import { LocalServiceService } from "@myproject/service/local-service/local-service.service";
import BaseRowComponent from './base-row/base-row.component';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {

  private _jsonName: string;

  @ViewChild("formBuilder", {read: ViewContainerRef, static: true}) formBuilder: ViewContainerRef;

  @Input()
  set jsonName(name: string) {
    this._jsonName = name
  }

  get jsonName() {
    return this._jsonName;
  }

  constructor(
    private ls: LocalServiceService,
    private crf: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {

    let service = this.ls.getService("formBuilder").getFilesList(this.jsonName);

    service.subscribe((res) => {
      let { files } = res;

      this.formBuilder.clear();
      let component: any = this.crf.resolveComponentFactory(BaseRowComponent);
      let ceateComponent: any = this.formBuilder.createComponent(component);
      ceateComponent.instance.files = this.ls.getService("formBuilder").serialize(files);
    })


  }

}
