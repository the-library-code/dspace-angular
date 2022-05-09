import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss']
})
export class GiFieldsComponent implements OnInit {

  uiConfig: any;

  constructor (private gidata: GiDataService) {
  }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => { this.uiConfig = result; } );
  }
}
