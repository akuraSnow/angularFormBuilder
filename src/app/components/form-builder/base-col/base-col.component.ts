import { LocalServiceService } from '@myproject/service/local-service/local-service.service';
import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-base-col',
  templateUrl: './base-col.component.html',
  styleUrls: ['./base-col.component.less']
})
export default class BaseColComponent implements OnInit {

  @Input() file: any;
  @Input() viewModel: any;
  @Input() hash: any;
  @ViewChild("baseItem", {read: ViewContainerRef, static: true} )baseItem: ViewContainerRef

  constructor(
    private ls: LocalServiceService,
    private crf: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.baseItem.clear();

    let model = {
      viewModel: this.viewModel,
      hash: this.hash,
      config: this.file
    };

    // create new component
    let itemComponent = this.ls.getComponent(this.file.type);

    let ceateComponent = this.ls.getService("formBuilder").AsynchronousLoadingComponent(this.crf, this.baseItem, itemComponent, model);

    // ceateComponent.instance.config = this.file;
  }

}
