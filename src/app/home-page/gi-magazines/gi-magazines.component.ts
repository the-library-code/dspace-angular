import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss'],
})

export class GiMagazinesComponent implements OnInit {

  uiConfigreq;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit() {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }

}



