import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GiDataService} from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LectureNotesComponent implements OnInit {

  uiConfig = [];

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) {
      }

  ngOnInit()  {
    this.gidata.getConfig().subscribe( result => {
      this.uiConfig.push(... ((result as any)._embedded?.layoutgroups[2]?._embedded?.communities));
      this.ref.markForCheck();
    } );
  }


}
