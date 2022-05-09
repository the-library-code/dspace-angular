import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  uiConfig: any;

  constructor(private gidata: GiDataService) {
      }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => { this.uiConfig = result; } );
  }


}
