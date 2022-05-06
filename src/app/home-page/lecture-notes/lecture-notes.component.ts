import {Component} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent {

  uiConfig: any;

  constructor(private gidata: GiDataService) {
    this.uiConfig = gidata.uiConfig;
  }
}
