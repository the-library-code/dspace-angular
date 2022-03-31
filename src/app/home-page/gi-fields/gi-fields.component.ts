import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss']
})
export class GiFieldsComponent implements OnInit {

  fields = [];
  cleanedFields = [];

  constructor(private gidata: GiDataService) { }

  ngOnInit(): void {
    // this.gidata.getFields().subscribe(async data => {
    //   await this.fields.push(data);
    //   await this.cleanedFields.push(this.fields[0]._embedded.communities);
    //   console.log(this.cleanedFields);
    // });
  }

}
