import { Component } from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss']
})

export class GiMagazinesComponent {

  uiConfig: any;

  constructor(private gidata: GiDataService) {
    this.uiConfig = gidata.uiConfig;
  }

}



