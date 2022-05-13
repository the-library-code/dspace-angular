import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss'],
  })

export class GiFieldsComponent implements OnInit {

  uiConfigreq;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit()  {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }

}

