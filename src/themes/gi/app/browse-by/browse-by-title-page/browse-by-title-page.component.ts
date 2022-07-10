import { Component } from '@angular/core';
import { BrowseByTitlePageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-title-page/browse-by-title-page.component';
// import { BrowseByDataType, rendersBrowseBy } from '../../../../../app/browse-by/browse-by-switcher/browse-by-decorator';

@Component({
  selector: 'ds-browse-by-title-page',
  // styleUrls: ['./browse-by-date-page.component.scss'],
  styleUrls: ['../browse-by-metadata-page/browse-by-metadata-page.component.scss'],
  // templateUrl: './browse-by-date-page.component.html'
  templateUrl: '../browse-by-metadata-page/browse-by-metadata-page.component.html'
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

// @rendersBrowseBy(BrowseByDataType.Metadata)
export class BrowseByTitlePageComponent extends BaseComponent {
}
