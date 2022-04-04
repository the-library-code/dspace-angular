import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';


@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss']
})
export class GiMagazinesComponent implements OnInit {
  configData = [];
  constructor(private gidata: GiDataService) {}




  ngOnInit(): void {
    this.gidata.getUI()
      .subscribe(results => {
        this.configData.push((results as any));
        console.log(this.configData);
      });
  }


}



