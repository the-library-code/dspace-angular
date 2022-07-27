import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { BrowseByMetadataPageComponent } from '../browse-by-metadata-page/browse-by-metadata-page.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BrowseService} from '../../../../../app/core/browse/browse.service';
import {DSpaceObjectDataService} from '../../../../../app/core/data/dspace-object-data.service';
import {PaginationService} from '../../../../../app/core/pagination/pagination.service';
import {SortDirection, SortOptions} from '../../../../../app/core/cache/models/sort-options.model';
import {BrowseEntrySearchOptions} from '../../../../../app/core/browse/browse-entry-search-options.model';
import {combineLatest as observableCombineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {PaginationComponentOptions} from '../../../../../app/shared/pagination/pagination-component-options.model';
import {
  browseParamsToOptions
} from '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';
import {hasValue} from '../../../../../app/shared/empty.util';
import {GiDataService} from '../../shared/gi-data.service';
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
export class BrowseByTitlePageComponent extends BrowseByMetadataPageComponent implements OnInit {

  public constructor(protected gidata: GiDataService,
                     protected ref: ChangeDetectorRef,
                     protected route: ActivatedRoute,
                     protected browseService: BrowseService,
                     protected dsoService: DSpaceObjectDataService,
                     protected router: Router,
                     protected paginationService: PaginationService,
                     protected cdRef: ChangeDetectorRef) {
    super(gidata, ref, route, browseService, dsoService, paginationService, router);
  }

  ngOnInit(): void {
    const sortConfig = new SortOptions('dc.title', SortDirection.ASC);
    this.updatePage(new BrowseEntrySearchOptions(this.defaultBrowseId, this.paginationConfig, sortConfig));
    this.currentPagination$ = this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig);
    this.currentSort$ = this.paginationService.getCurrentSort(this.paginationConfig.id, sortConfig);
    this.subs.push(
      observableCombineLatest([this.route.params, this.route.queryParams, this.currentPagination$, this.currentSort$]).pipe(
        map(([routeParams, queryParams, currentPage, currentSort]) => {
          return [Object.assign({}, routeParams, queryParams),currentPage,currentSort];
        })
      ).subscribe(([params, currentPage, currentSort]: [Params, PaginationComponentOptions, SortOptions]) => {
        this.startsWith = +params.startsWith || params.startsWith;
        this.browseId = params.id || this.defaultBrowseId;
        this.updatePageWithItems(browseParamsToOptions(params, currentPage, currentSort, this.browseId), undefined, undefined);
        this.updateParent(params.scope);
      }));

    this.initLogo();

    this.updateStartsWithTextOptions();
  }

}


