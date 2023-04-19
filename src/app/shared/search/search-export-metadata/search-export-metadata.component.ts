import { Component, Input, OnInit } from '@angular/core';
import { PaginatedSearchOptions } from '../models/paginated-search-options.model';
import { RESTURLCombiner } from '../../../core/url-combiner/rest-url-combiner';
import { getBitstreamDownloadRoute } from '../../../app-routing-paths';
import { Observable } from 'rxjs';
import { FileService } from '../../../core/shared/file.service';
import { HardRedirectService } from '../../../core/services/hard-redirect.service';
import { HALEndpointService } from '../../../core/shared/hal-endpoint.service';

@Component({
  selector: 'ds-search-export-metadata',
  styleUrls: ['./search-export-metadata.component.scss'],
  templateUrl: './search-export-metadata.component.html',
})
/**
 * Display a button to export the current search results as csv
 */
export class SearchExportMetadataComponent implements OnInit {

  /**
   * The current configuration of the search
   */
  @Input() searchConfig: PaginatedSearchOptions;

  @Input() showMetadataExport: boolean;

  /**
   * The message key used for the tooltip of the button
   */
  tooltipMsg = 'bib-export-search.tooltip';

  /**
   * Current format
   */
  format = 'csv';

  constructor(
    private fileService: FileService,
    private hardRedirectService: HardRedirectService,
    private halService: HALEndpointService
  ) {

  }

  ngOnInit(): void {
  }

  onFormatChange(event) {
    this.format = event;
  }

  downloadExportMetadata() {
    let params = this.searchConfig.toRestUrl('');
    let url = new RESTURLCombiner('/bibexport' + params + '&format=' +
      this.format + '&search=true').toString();
    this.fileService.retrieveMetadataExportDownloadLink( url).pipe(
    ).subscribe((url) => {
      this.hardRedirectService.redirect(url);
    })
  }

}
