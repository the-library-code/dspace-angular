import {Component, OnInit} from '@angular/core';
import {GiDataService} from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['../../../themes/custom/styles/homepage-box_with-thumbnail.scss'],
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
