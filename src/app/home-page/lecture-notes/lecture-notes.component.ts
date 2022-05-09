import {Component, OnInit} from '@angular/core';
import {GiDataService} from '../gi-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss'],
})
export class LectureNotesComponent implements OnInit {

  req: Observable<any>;

  constructor(private gidata: GiDataService) {
      }

  ngOnInit()  {
    this.req = this.gidata.getConfig();
  }
}
