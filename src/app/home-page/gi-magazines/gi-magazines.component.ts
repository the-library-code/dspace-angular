import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss']
})

export class GiMagazinesComponent implements OnInit {

  uiConfig: any;

  constructor(private gidata: GiDataService) {
      }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => { this.uiConfig = result; } );
  }

}



