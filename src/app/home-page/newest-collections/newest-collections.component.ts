import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-newest-collections',
  templateUrl: './newest-collections.component.html',
  styleUrls: ['../../../themes/gi/styles/homepage-box_with-thumbnail.scss']
})
export class NewestCollectionsComponent implements OnInit {

  uiConfigreq;
  numberSub;
  numberOfItems;

  constructor(public gidata: GiDataService) {
  }

  ngOnInit()  {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }

}
