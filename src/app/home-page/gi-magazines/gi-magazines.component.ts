import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { GiDataService } from '../gi-data.service';

@Component({
  selector: 'ds-gi-magazines',
  templateUrl: './gi-magazines.component.html',
  styleUrls: ['./gi-magazines.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class GiMagazinesComponent implements OnInit {

  uiConfig = [];

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) {
      }

  ngOnInit()  {
    this.gidata.getConfig().subscribe(result => {
      this.uiConfig.push(... ((result as any)._embedded?.layoutgroups[1]?._embedded?.communities));
      this.ref.detectChanges();
    } );
  }

}



