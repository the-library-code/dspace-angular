import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../../shared/gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['../../../styles/homepage-box_with-thumbnail.scss',
              './lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  uiConfigreq;
  numberSub;
  numberOfItems;

  constructor(public gidata: GiDataService) {
      }

  ngOnInit()  {
    this.uiConfigreq = this.gidata.uiConfigreq;
  }
}
