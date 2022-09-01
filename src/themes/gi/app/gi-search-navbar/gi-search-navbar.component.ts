

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../../../app/core/shared/search/search.service';
import { expandSearchInput } from '../../../../app/shared/animations/slide';
import { PaginationService } from '../../../../app/core/pagination/pagination.service';
import { SearchConfigurationService } from '../../../../app/core/shared/search/search-configuration.service';

// @ToDo make GI exclusive component?
import {GiDataService} from '../shared/gi-data.service';

/**
 * The search box in the header that expands on focus and collapses on focus out
 */
@Component({
  selector: 'ds-gi-search-navbar',
  templateUrl: './gi-search-navbar.component.html',
  styleUrls: ['./gi-search-navbar.component.scss'],
  animations: [expandSearchInput]
})
export class GiSearchNavbarComponent implements OnInit {

  // The search form
  searchForm;
  // Whether or not the search bar is expanded, boolean for html ngIf, string fo AngularAnimation state change
  searchExpanded = false;
  isExpanded = 'collapsed';
  searchPlaceholder;

  // Search input field
  @ViewChild('searchInput') searchField: ElementRef;

  constructor(private formBuilder: FormBuilder, private router: Router, private searchService: SearchService,
              private paginationService: PaginationService,
              private searchConfig: SearchConfigurationService, public gds: GiDataService) {
    this.searchForm = this.formBuilder.group(({
      query: '',
    }));
  }

  /**
   * Expands search bar by angular animation, see expandSearchInput
   * @ToDo hide input field in animation?
   */
  expand() {
    this.searchExpanded = true;
    this.isExpanded = 'expanded';
    this.editSearch();
  }

  /**
   * Collapses & blurs search bar by angular animation, see expandSearchInput
   */
  collapse() {
    this.searchField.nativeElement.blur();
    this.isExpanded = 'collapsed';
    this.searchExpanded = false;
  }

  /**
   * Focuses on input search bar so search can be edited
   */
  editSearch(): void {
    this.searchField.nativeElement.focus();
  }

  /**
   * Submits the search (on enter or on search icon click)
   * @param data  Data for the searchForm, containing the search query
   */
  onSubmit(data: any) {
    this.collapse();
    const linkToNavigateTo = this.searchService.getSearchLink().split('/');
    this.searchForm.reset();
    this.paginationService.updateRouteWithUrl(this.searchConfig.paginationID, linkToNavigateTo, {page: 1}, data);
  }

  ngOnInit() {
    this.searchPlaceholder = this.gds.searchPlaceholder;
  }
}
