import {Component,OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-lecture-notes',
  templateUrl: './lecture-notes.component.html',
  styleUrls: ['./lecture-notes.component.scss']
})
export class LectureNotesComponent implements OnInit {

  lectureNotes = [];
  name: string;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit() {
    this.gidata.getUI().subscribe(data => {
      this.lectureNotes = data.layoutgroups[2]._embedded.communities;
    });
  }



}
