import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GiDataService} from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LectureNotesComponent implements OnInit {

  uiConfig: any;
  ready = false;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) {
      }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => { this.uiConfig = result; this.ref.markForCheck(); } );
  }


}
