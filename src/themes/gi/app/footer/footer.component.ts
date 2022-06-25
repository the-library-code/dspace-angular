import { Component, OnInit, Optional } from '@angular/core';
import { hasValue } from '../../../../app/shared/empty.util';
import { KlaroService } from '../../../../app/shared/cookies/klaro.service';
import { GiDataService } from '../shared/gi-data.service';

@Component({
  selector: 'ds-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent implements OnInit {
  dateObj: number = Date.now();

  /**
   * A boolean representing if to show or not the top footer container
   */
  showTopFooter = true;

  req;

  constructor(@Optional() private cookies: KlaroService, private gidata: GiDataService) {
  }

  ngOnInit() {
    this.req = this.gidata.uiConfigreq;
  }

  showCookieSettings() {
    if (hasValue(this.cookies)) {
      this.cookies.showSettings();
    }
    return false;
  }

}
