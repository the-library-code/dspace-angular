import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../../shared/gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['../../../styles/homepage-box_without-thumbnail.scss'],
  })

export class GiFieldsComponent implements OnInit {

  uiConfigreq;
  numberSub;
  numberOfItems;

  constructor(public gidata: GiDataService) {
  }

  ngOnInit()  {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }
}

