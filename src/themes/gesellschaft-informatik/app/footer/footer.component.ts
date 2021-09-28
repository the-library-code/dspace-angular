import { Component, Optional } from '@angular/core';
import { hasValue } from '../../../../app/shared/empty.util';
import { KlaroService } from '../../../../app/shared/cookies/klaro.service';

@Component({
  selector: 'ds-footer',
  styleUrls: ['footer.component.scss'],
  templateUrl: 'footer.component.html'
})
export class FooterComponent {
  dateObj: number = Date.now();

  /**
   * A boolean representing if to show or not the top footer container
   */
  showTopFooter = true;

  constructor(@Optional() private cookies: KlaroService) {
  }

  showCookieSettings() {
    if (hasValue(this.cookies)) {
      this.cookies.showSettings();
    }
    return false;
  }
}
