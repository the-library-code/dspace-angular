import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../../shared/gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['../../../styles/homepage-box_with-thumbnail.scss',
              // 'gi-magazines.component.scss'
  ],
})

export class GiMagazinesComponent implements OnInit {
  uiConfigreq;
  numberSub;
  numberOfItems;

  constructor(public gidata: GiDataService) {
  }

  ngOnInit()  {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }
}



