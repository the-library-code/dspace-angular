import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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

  getLectureNotes() {
    this.gidata.getUI().subscribe(data => {
      this.lectureNotes = data[2].layoutgroups[2]._embedded.communities;
      console.log(data);
      console.log(this.lectureNotes);});
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.getLectureNotes();
  }

  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges: ', change);
  }

  ngDoCheck() {
    console.log('Do Check!');
  }

  ngAfterContentInit() {
    console.log('AfterContent Init');
  }

  ngAfterContentChecked() {
    console.log('AfterContent Checked');
  }

  ngAfterViewInit() {
    console.log('After View Init');
  }

  ngAfterViewChecked() {
    console.log('After View Checked');
  }


}
