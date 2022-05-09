import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss'],
})

export class GiMagazinesComponent implements OnInit {

  req: Observable<any>;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit()  {
    this.req = this.gidata.getConfig();
  }

}



