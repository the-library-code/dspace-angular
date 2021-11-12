import { Component, OnInit } from '@angular/core';
import { CrisLayoutPage } from '../../decorators/cris-layout-page.decorator';
import { LayoutPage } from '../../enums/layout-page.enum';
import { Tab } from '../../../core/layout/models/tab.model';
import { CrisLayoutTabsSidebarComponent } from '../shared/cris-layout-tabs/cris-layout-tabs.component';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ds-cris-layout-horizontal',
  templateUrl: './cris-layout-horizontal.component.html',
  styleUrls: ['./cris-layout-horizontal.component.scss']
})
@CrisLayoutPage(LayoutPage.HORIZONTAL)
export class CrisLayoutHorizontalComponent extends CrisLayoutTabsSidebarComponent implements OnInit {

  /**
   * Tabs to render
   */
  tabs: Tab[];

  /* tslint:disable:no-empty */
  constructor(public location: Location, public router: Router, public route: ActivatedRoute) { 
    super(location,router,route);
  }

  ngOnInit(): void {
    this.init();
  }
  /* tslint:enable:no-empty */
}
