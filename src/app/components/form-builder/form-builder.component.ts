import { from, Observable } from 'rxjs';
import { Component, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, Input, OnInit, ViewChild, ViewContainerRef, Type } from '@angular/core';
import { FormBuilderService } from '@myproject/service/form-builder/form-builder.service';

import { LocalServiceService } from "@myproject/service/local-service/local-service.service";
import BaseRowComponent from './base-row/base-row.component';
import _ from 'lodash';
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less']
})
export class FormBuilderComponent implements OnInit {

  private _jsonName: string;
  private _viewModel: string;

  @ViewChild("formBuilder", {read: ViewContainerRef, static: true}) formBuilder: ViewContainerRef;

  @Input()
  set viewModel(name: string) {
    this._viewModel = name
  }
  get viewModel() {
    return this._viewModel;
  }

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
      let { files, action } = res;

      this.formBuilder.clear();

      let model = {
        viewModel: this.viewModel,
        hash: Math.random().toString().replace('.', '')
      };

      let ceateComponent = this.ls.getService("formBuilder").AsynchronousLoadingComponent(this.crf, this.formBuilder, BaseRowComponent, model);
      let serializeFiles = this.ls.getService("formBuilder").serialize(files);
      
      ceateComponent.instance.files = serializeFiles;

      this.loadData(serializeFiles);

    })
  }

  loadData(serializeFiles: any[]) {

    
  }

}
