import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  lectureNotes$ = [];

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {

    this.gidata.getLectureNotes()
      .subscribe(results => {
        this.lectureNotes$.push((results as any));
        console.log(this.lectureNotes$);
      });


  }
}
