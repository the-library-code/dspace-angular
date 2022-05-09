import {Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss'],
  })

export class GiFieldsComponent implements OnInit {

  req: Observable<any>;

  constructor(private gidata: GiDataService) {
  }

  ngOnInit()  {
    this.req = this.gidata.getConfig();
  }

}

