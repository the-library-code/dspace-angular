import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {


    this.gidata.getLectureNotes().subscribe(data => {
      console.log(data);
    });
  }

}
