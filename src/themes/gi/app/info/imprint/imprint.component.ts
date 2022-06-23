import { Component } from '@angular/core';
import { ImprintComponent as BaseComponent } from '../../../../../app/info/imprint/imprint.component';

@Component({
  selector: 'ds-imprint',
  styleUrls: ['./imprint.component.scss'],
  // styleUrls: ['../../../../../app/info/imprint/imprint.component.scss'],
  templateUrl: './imprint.component.html'
  // templateUrl: '../../../../../app/info/imprint/imprint.component.html'
})

/**
 * Component displaying the Privacy Statement
 */
export class ImprintComponent extends BaseComponent {}
