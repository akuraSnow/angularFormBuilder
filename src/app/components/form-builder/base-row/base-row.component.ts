import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-base-row',
  templateUrl: './base-row.component.html',
  styleUrls: ['./base-row.component.less']
})
export default class BaseRowComponent implements OnInit {

  @Input() files: any[];

  _files: any[];

  constructor() { 
    this._files = this.files;
  }

  ngOnInit() {

  }




}
