import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  lectureNotes: any[] = [];

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {
    this.gidata.getUI()
      .subscribe(results => {
        this.lectureNotes.push((results as any)._embedded.layoutgroups[2]._embedded.communities);
        console.log(this.lectureNotes);
        this.lectureNotes = this.lectureNotes[0];
        console.log(this.lectureNotes);
      });
  }
}
