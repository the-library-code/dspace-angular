import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss']
})
export class GiFieldsComponent implements OnInit {

  giFields = [];

  constructor (private gidata: GiDataService) {
  }

  ngOnInit(): void {
    this.gidata.getUI()
       .subscribe(results => {
         this.giFields.push( ... results[3].layoutgroups[0]._embedded.communities);
       });
  }


}
