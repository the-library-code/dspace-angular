import { Component, OnInit } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss']
})

export class GiMagazinesComponent implements OnInit {

  giMagazines = [];

  constructor(private gidata: GiDataService) {
  }

  ngOnInit(): void {
    this.gidata.getUI()
       .subscribe(results => {
         this.giMagazines.push(... results.layoutgroups[1]._embedded.communities);
       });
  }


}



