import {  Component, Input, OnInit } from '@angular/core';
import { GiDataService } from '../../../shared/gi-data.service';

@Component({
  selector: 'ds-field',
  templateUrl: './field.component.html',
  styleUrls: ['../../../../styles/homepage-box_without-thumbnail.scss']
})
export class FieldComponent implements OnInit {


  @Input() fields: any;
  numberSub;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.fields.uuid);

  }
}
