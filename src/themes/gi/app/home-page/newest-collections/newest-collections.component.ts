import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../../shared/gi-data.service';

@Component({
  selector: 'ds-newest-collections',
  templateUrl: './newest-collections.component.html',
  styleUrls: ['../../../styles/homepage-box_with-thumbnail.scss',
              './newest-collections.component.scss']
})
export class NewestCollectionsComponent implements OnInit {

  latestCollection;

  constructor(public gidata: GiDataService) {
  }

  ngOnInit()  {
    this.latestCollection = this.gidata.latestCollection;
  }

}
