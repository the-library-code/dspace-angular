import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GiDataService } from '../../gi-data.service';

@Component({
  selector: 'ds-field',
  templateUrl: './field.component.html',
  styleUrls: ['../../../../themes/gi/styles/homepage-box_without-thumbnail.scss']
})
export class FieldComponent implements OnInit {


  @Input() fields: any;
  numberOfItems;
  numberSub;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.fields.uuid);

  }
}
