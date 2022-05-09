import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss'],
  })

export class GiFieldsComponent implements OnInit {

  req;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit()  {
    this.req = this.gidata.req;
  }

}

