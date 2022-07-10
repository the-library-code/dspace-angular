import { Component } from '@angular/core';
import { BrowseByMetadataPageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';
import { BrowseByDataType, rendersBrowseBy } from '../../../../../app/browse-by/browse-by-switcher/browse-by-decorator';

@Component({
  selector: 'ds-browse-by-metadata-page',
  // styleUrls: ['./browse-by-metadata-page.component.scss'],
  styleUrls: ['../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.scss'],
  // templateUrl: './browse-by-metadata-page.component.html'
  templateUrl: '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.html'
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

// @rendersBrowseBy(BrowseByDataType.Metadata)
export class BrowseByMetadataPageComponent extends BaseComponent {
}
