import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
// import { BrowseByDatePageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-date-page/browse-by-date-page.component';
import {
  BrowseByMetadataPageComponent
} from '../browse-by-metadata-page/browse-by-metadata-page.component';
import {
 browseParamsToOptions
} from '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BrowseService} from '../../../../../app/core/browse/browse.service';
import {DSpaceObjectDataService} from '../../../../../app/core/data/dspace-object-data.service';
import {PaginationService} from '../../../../../app/core/pagination/pagination.service';
import {SortDirection, SortOptions} from '../../../../../app/core/cache/models/sort-options.model';
import {StartsWithType} from '../../../../../app/shared/starts-with/starts-with-decorator';
import {BrowseEntrySearchOptions} from '../../../../../app/core/browse/browse-entry-search-options.model';
import {combineLatest as observableCombineLatest} from 'rxjs';
import {map} from 'rxjs/operators';
import {PaginationComponentOptions} from '../../../../../app/shared/pagination/pagination-component-options.model';
import {RemoteData} from '../../../../../app/core/data/remote-data';
import {Item} from '../../../../../app/core/shared/item.model';
import {environment} from '../../../../../environments/environment';
import {hasValue, isNotEmpty} from '../../../../../app/shared/empty.util';
import {isValidDate} from '../../../../../app/shared/date.util';
import {GiDataService} from '../../shared/gi-data.service';
import {Community} from '../../../../../app/core/shared/community.model';
// import { BrowseByDataType, rendersBrowseBy } from '../../../../../app/browse-by/browse-by-switcher/browse-by-decorator';

@Component({
  selector: 'ds-browse-by-date-page',
  // styleUrls: ['./browse-by-date-page.component.scss'],
  styleUrls: ['../browse-by-metadata-page/browse-by-metadata-page.component.scss'],
  // templateUrl: './browse-by-date-page.component.html'
  templateUrl: '../browse-by-metadata-page/browse-by-metadata-page.component.html'
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

// @rendersBrowseBy(BrowseByDataType.Metadata)
export class BrowseByDatePageComponent extends BrowseByMetadataPageComponent  implements OnInit {

  /**
   * The default metadata keys to use for determining the lower limit of the StartsWith dropdown options
   */
  defaultMetadataKeys = ['dc.date.issued'];

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
    const sortConfig = new SortOptions('default', SortDirection.ASC);
    this.startsWithType = StartsWithType.date;
    this.updatePage(new BrowseEntrySearchOptions(this.defaultBrowseId, this.paginationConfig, sortConfig));
    this.currentPagination$ = this.paginationService.getCurrentPagination(this.paginationConfig.id, this.paginationConfig);
    this.currentSort$ = this.paginationService.getCurrentSort(this.paginationConfig.id, sortConfig);
    this.subs.push(
      observableCombineLatest([this.route.params, this.route.queryParams, this.route.data,
        this.currentPagination$, this.currentSort$]).pipe(
        map(([routeParams, queryParams, data, currentPage, currentSort]) => {
          return [Object.assign({}, routeParams, queryParams, data), currentPage, currentSort];
        })
      ).subscribe(([params, currentPage, currentSort]: [Params, PaginationComponentOptions, SortOptions]) => {
        const metadataKeys = params.browseDefinition ? params.browseDefinition.metadataKeys : this.defaultMetadataKeys;
        this.browseId = params.id || this.defaultBrowseId;
        this.startsWith = +params.startsWith || params.startsWith;
        const searchOptions = browseParamsToOptions(params, currentPage, currentSort, this.browseId);
        this.updatePageWithItems(searchOptions, this.value, undefined);
        this.updateParent(params.scope);
        this.updateStartsWithOptions(this.browseId, metadataKeys, params.scope);
      }));

    this.initLogo();
  }

  /**
   * Update the StartsWith options
   * In this implementation, it creates a list of years starting from now, going all the way back to the earliest
   * date found on an item within this scope. The further back in time, the bigger the change in years become to avoid
   * extremely long lists with a one-year difference.
   * To determine the change in years, the config found under GlobalConfig.BrowseBy is used for this.
   * @param definition      The metadata definition to fetch the first item for
   * @param metadataKeys    The metadata fields to fetch the earliest date from (expects a date field)
   * @param scope           The scope under which to fetch the earliest item for
   */
  updateStartsWithOptions(definition: string, metadataKeys: string[], scope?: string) {
    this.subs.push(
      this.browseService.getFirstItemFor(definition, scope).subscribe((firstItemRD: RemoteData<Item>) => {
        let lowerLimit = environment.browseBy.defaultLowerLimit;
        if (hasValue(firstItemRD.payload)) {
          const date = firstItemRD.payload.firstMetadataValue(metadataKeys);
          if (isNotEmpty(date) && isValidDate(date)) {
            const dateObj = new Date(date);
            // TODO: it appears that getFullYear (based on local time) is sometimes unreliable. Switching to UTC.
            lowerLimit = isNaN(dateObj.getUTCFullYear()) ? lowerLimit : dateObj.getUTCFullYear();
          }
        }
        const options = [];
        const currentYear = new Date().getUTCFullYear();
        const oneYearBreak = Math.floor((currentYear - environment.browseBy.oneYearLimit) / 5) * 5;
        const fiveYearBreak = Math.floor((currentYear - environment.browseBy.fiveYearLimit) / 10) * 10;
        if (lowerLimit <= fiveYearBreak) {
          lowerLimit -= 10;
        } else if (lowerLimit <= oneYearBreak) {
          lowerLimit -= 5;
        } else {
          lowerLimit -= 1;
        }
        let i = currentYear;
        while (i > lowerLimit) {
          options.push(i);
          if (i <= fiveYearBreak) {
            i -= 10;
          } else if (i <= oneYearBreak) {
            i -= 5;
          } else {
            i--;
          }
        }
        if (isNotEmpty(options)) {
          this.startsWithOptions = options;
          this.cdRef.detectChanges();
        }
      })
    );
  }
}
