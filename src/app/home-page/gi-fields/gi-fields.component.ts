import { Component } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss']
})
export class GiFieldsComponent {

  uiConfig: any;

  constructor (public gidata: GiDataService) {
    this.uiConfig = gidata.uiConfig;
  }

}
