import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';


@Component({
  selector: 'ds-gi-fields',
  templateUrl: './gi-fields.component.html',
  styleUrls: ['./gi-fields.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class GiFieldsComponent implements OnInit {

  uiConfig = [];

  constructor (private gidata: GiDataService, private ref: ChangeDetectorRef) {
  }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => {
      this.uiConfig.push(... ((result as any)._embedded?.layoutgroups[0]?._embedded?.communities));
      this.ref.detectChanges();
    } );
  }
}
