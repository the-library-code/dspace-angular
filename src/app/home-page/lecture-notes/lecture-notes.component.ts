import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';
import { IHomepageData } from '../homepage-data-interface';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  lectureNotes$: IHomepageData[] = [];

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {

    this.gidata.getLectureNotes()
      .subscribe(results => {
        this.lectureNotes$.push((results as any)._embedded.collections);
        console.log(this.lectureNotes$);
      });


  }
}
