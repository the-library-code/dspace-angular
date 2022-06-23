import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { ImprintComponent } from './imprint.component';

/**
 * Themed wrapper for ImprintComponent
 */
@Component({
  selector: 'ds-themed-imprint',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedImprintComponent extends ThemedComponent<ImprintComponent> {
  protected getComponentName(): string {
    return 'ImprintComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/info/imprint/imprint.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./imprint.component`);
  }

}
