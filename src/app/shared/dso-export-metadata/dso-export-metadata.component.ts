import { Component, Input, OnInit } from '@angular/core';
import { RESTURLCombiner } from '../../core/url-combiner/rest-url-combiner';
import { Observable, of } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { hasValue } from '../empty.util';
import { URLCombiner } from '../../core/url-combiner/url-combiner';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationDataService } from '../../core/data/feature-authorization/authorization-data.service';
import { AuthService } from '../../core/auth/auth.service';
import { FileService } from '../../core/shared/file.service';
import { HardRedirectService } from '../../core/services/hard-redirect.service';
import { Location } from '@angular/common';
import { HALEndpointService } from '../../core/shared/hal-endpoint.service';

@Component({
  selector: 'ds-dso-export-metadata',
  styleUrls: ['./dso-export-metadata.component.scss'],
  templateUrl: './dso-export-metadata.component.html',
})
/**
 * Display a button to export the current search results as csv
 */
export class DsoExportMetadataComponent implements OnInit {

  /**
   * The current configuration of the search
   */
  @Input() handle: string;

  @Input() showMetadataExport: boolean;

  /**
   * The message key used for the tooltip of the button
   */
  tooltipMsg = 'metadata-export-search.tooltip';

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
    this.fileService.retrieveMetadataExportDownloadLink( this.halService.getRootHref() + '/bibexport' +
      '?handle=' + this.handle + '&format=' + this.format + '&search=false').pipe(
    ).subscribe((url) => {
      this.hardRedirectService.redirect(url);
    })
  }

}
