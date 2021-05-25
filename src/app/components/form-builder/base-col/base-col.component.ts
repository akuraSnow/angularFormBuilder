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
  @ViewChild("baseItem", {read: ViewContainerRef, static: true} )baseItem: ViewContainerRef

  constructor(
    private ls: LocalServiceService,
    private crf: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    console.log("🚀 ~ file: base-col.component.ts ~ line 23 ~ BaseColComponent ~ ngOnInit ~ this.file", this.file)

    const { bindData } = this.file;

    this.baseItem.clear();

    let itemComponent = this.ls.getComponent(this.file.type);

    let component: any = this.crf.resolveComponentFactory(itemComponent);

    let ceateComponent: any = this.baseItem.createComponent(component);

    ceateComponent.instance.viewModel = this.viewModel;
    ceateComponent.instance.config = this.file;
  }

}
