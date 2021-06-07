import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-row',
  templateUrl: './base-row.component.html',
  styleUrls: ['./base-row.component.less']
})
export default class BaseRowComponent implements OnInit {

  
  _files: any[];
  _viewModel: any;

  @Input() hash:string;

  @Input()
  set files(item: any) {
    this._files = item;
  }
  get files() {
    console.log('this._files: ', this._files);
    return this._files;


  }

  @Input() 
  set viewModel(item: any) {
    this._viewModel = item;
  }
  get viewModel() {
    return this._viewModel;
  }


  constructor() {
    this._files = this.files;
  }

  ngOnInit() {

  }




}
