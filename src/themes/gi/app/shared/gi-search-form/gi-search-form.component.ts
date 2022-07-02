import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DSpaceObject } from '../../../../../app/core/shared/dspace-object.model';
import { Router } from '@angular/router';
import { isNotEmpty } from '../../../../../app/shared/empty.util';
import { SearchService } from '../../../../../app/core/shared/search/search.service';
import { currentPath } from '../../../../../app/shared/utils/route.utils';
import { PaginationService } from '../../../../../app/core/pagination/pagination.service';
import { SearchConfigurationService } from '../../../../../app/core/shared/search/search-configuration.service';
import {ViewMode} from '../../../../../app/core/shared/view-mode.model';
import {Context} from '../../../../../app/core/shared/context.model';
import {listableObjectComponent} from '../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */

@Component({
  selector: 'ds-search-form-ges-info',
  styleUrls: ['./gi-search-form.component.scss'],
  templateUrl: './gi-search-form.component.html'
})


// @listableObjectComponent('Project', ViewMode.StandalonePage, Context.Any, 'mydspacesite')

/**
 * Component that represents the search form
 */
export class GiSearchFormComponent {
  /**
   * The search query
   */
  @Input() query: string;

  /**
   * True when the search component should show results on the current page
   */
  @Input() inPlaceSearch;

  /**
   * The currently selected scope object's UUID
   */
  @Input()
  scope = '';

  @Input() currentUrl: string;

  /**
   * The available scopes
   */
  @Input() scopes: DSpaceObject[];

  /**
   * Whether or not the search button should be displayed large
   */
  @Input() large = false;

  /**
   * The brand color of the search button
   */
  @Input() brandColor = 'primary';

  /**
   * The placeholder of the search input
   */
  @Input() searchPlaceholder: string;

  /**
   * Output the search data on submit
   */
  @Output() submitSearch = new EventEmitter<any>();

  constructor(private router: Router, private searchService: SearchService,
              private paginationService: PaginationService,
              private searchConfig: SearchConfigurationService
              ) {
  }

  /**
   * Updates the search when the form is submitted
   * @param data Values submitted using the form
   */
  onSubmit(data: any) {
    this.updateSearch(data);
    this.submitSearch.emit(data);
  }

  /**
   * Updates the search when the current scope has been changed
   * @param {string} scope The new scope
   */
  onScopeChange(scope: string) {
    this.updateSearch({ scope });
  }

  /**
   * Updates the search URL
   * @param data Updated parameters
   */
  updateSearch(data: any) {
      const queryParams =  Object.assign({}, data);
      const pageParam = this.paginationService.getPageParam(this.searchConfig.paginationID);
      queryParams[pageParam] = 1;

      this.router.navigate(this.getSearchLinkParts(), {
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
    this.paginationService.updateRouteWithUrl(this.searchConfig.paginationID, this.getSearchLinkParts(), { page: 1 }, data);
  }

  /**
   * For usage of the isNotEmpty function in the template
   */
  isNotEmpty(object: any) {
    return isNotEmpty(object);
  }

  /**
   * @returns {string} The base path to the search page, or the current page when inPlaceSearch is true
   */
  public getSearchLink(): string {
    if (this.inPlaceSearch) {
      return currentPath(this.router);
    }
    return this.searchService.getSearchLink();
  }

  /**
   * @returns {string[]} The base path to the search page, or the current page when inPlaceSearch is true, split in separate pieces
   */
  public getSearchLinkParts(): string[] {
    if (this.inPlaceSearch) {
      return [];
    }
    return this.getSearchLink().split('/');
  }
}