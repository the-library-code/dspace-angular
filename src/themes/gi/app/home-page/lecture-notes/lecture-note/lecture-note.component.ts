import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GiDataService} from '../../../shared/gi-data.service';

@Component({
  selector: 'ds-lecture-note',
  templateUrl: './lecture-note.component.html',
  styleUrls: ['../../../../styles/homepage-box_with-thumbnail.scss',
              './lecture-note.component.scss'
  ]
})
export class LectureNoteComponent implements OnInit, OnDestroy {

  @Input() lectureNotes: any;
  numberOfItems;
  logoSub;
  numberSub;
  thumbnailUrl;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.lectureNotes.uuid);

    // this subscription is direct, we have to manage it ourselves.
    this.logoSub = this.gidata.getReq(this.lectureNotes._links.logo.href).subscribe(result => {
      this.thumbnailUrl = result._links.content.href;
      this.ref.markForCheck();});
     }

  ngOnDestroy() {
    this.logoSub.unsubscribe();
  }
}
