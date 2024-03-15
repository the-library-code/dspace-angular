import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, Subject, Subscription, of as observableOf, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, filter, map, merge, mergeMap, switchMap, tap } from 'rxjs/operators';
import { PaginatedList, buildPaginatedList } from 'src/app/core/data/paginated-list.model';
import { VocabularyEntry } from 'src/app/core/submission/vocabularies/models/vocabulary-entry.model';
import { VocabularyService } from 'src/app/core/submission/vocabularies/vocabulary.service';
import { DsDynamicVocabularyComponent } from '../dynamic-vocabulary.component';
import { DynamicOneboxModel } from '../onebox/dynamic-onebox.model';
import { PageInfo } from 'src/app/core/shared/page-info.model';
import { getFirstSucceededRemoteDataPayload } from '../../../../../../core/shared/operators';
import { Vocabulary } from 'src/app/core/submission/vocabularies/models/vocabulary.model';
import { isNotEmpty } from 'src/app/shared/empty.util';
import { FormFieldMetadataValueObject } from '../../../models/form-field-metadata-value.model';
import { DynamicFormLayoutService, DynamicFormValidationService } from '@ng-dynamic-forms/core';
import { start } from 'repl';
import { GndService } from 'src/app/core/data/gnd.service';
import { ExternalSourceDataService } from 'src/app/core/data/external-source-data.service';
import { ExternalSourceData } from 'src/app/submission/import-external/import-external-searchbar/submission-import-external-searchbar.component';
import { ExternalGndSourceData, GndExternalSourceResponse } from 'src/app/core/submission/models/gnd-entry.model';

@Component({
  selector: 'gnd-lookup',
  templateUrl: './gnd-lookup.component.html',
  styleUrls: ['./gnd-lookup.component.scss'],
})

export class GndLookupComponent implements OnInit {

  searchText = new FormControl('');

  @Input() group: UntypedFormGroup;
  @Input() model: DynamicOneboxModel;
  @Output() blur: EventEmitter<any> = new EventEmitter<any>(); @Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  pageInfo: PageInfo = new PageInfo();


  click$ = new Subject<string>();
  private vocabulary$: Observable<Vocabulary>;
  searchFailed = false;
  hideSearchingWhenUnsubscribed$ = new Observable(() => () => this.changeSearchingStatus(false));
  inputValue: any;

  gndSearchForm: FormGroup;
  externalLink: Observable<string>;
 
  mockData: Observable<GndExternalSourceResponse>
  searchResults: ExternalGndSourceData[];
  selectedGndRecord: ExternalGndSourceData;
  selectedRecord: ExternalGndSourceData;

  totalItems: number = 0;
  itemsPerPage: number = 10;
  currentPage: number = 1;
  totalResults: number;

  constructor(
    private activeModal: NgbActiveModal,
    protected gndService: GndService,
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService,
    private formBuilder: FormBuilder,
    private externalService: ExternalSourceDataService,
  ) {

  }

  ngOnInit(): void {
    this.loadForm();
    if (this.model.value) {
      this.setCurrentValue(this.model.value, true);
    }

    // this.vocabulary$ = this.vocabularyService.findVocabularyById(this.model.vocabularyOptions.name).pipe(
    //   getFirstSucceededRemoteDataPayload(),
    //   distinctUntilChanged()
    // );
  }

  getGndExternalSourceUrl(externalSourceId: string) {
    
  }

  loadForm() {
    this.gndSearchForm = this.formBuilder.group({
      searchText: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get gndSearchFormControl() {
    return this.gndSearchForm.controls;
  }

  cancel(): void {
    this.activeModal.close();
  }

  selectTheRecord(): void {
    this.activeModal.close();
  }

  



  changeSearchingStatus(status: boolean) {
    // this.searching = status;
  }

  setCurrentValue(value: any, init = false): void { 
   
  }


  searchGNDAuthority() {

      this.changeSearchingStatus(true); // Set searching status to true
    const term = this.searchText.value.trim(); // Get the search term from the input field

    if (term === '' || term.length < this.model.minChars) {
      this.changeSearchingStatus(false); // Set searching status to false
      return; // Exit the function early if search term is empty or too short
    }

  // Call the function to get the mock data
    // this.mockData = this.gndService.getMockExternalSourceData();
    // this.searchResults = this.mockData._embedded.externalSourceEntries;

    this.gndService.getMockExternalSourceData().pipe(
      // Use the map operator to transform the emitted data
      map((data: any) => {
        const modifiedData = {
          ...data, 
        };
        return modifiedData;
      })
    ).subscribe((modifiedData: any) => {
      // Assign the modified data to this.searchResults
      this.searchResults = modifiedData._embedded.externalSourceEntries;
    });

    this.gndService.getMockExternalSourceData().subscribe((data: any) => {
      const gndData = {
        ...data,
        _embedded: {
          externalSourceEntries: this.paginateResults(data._embedded.externalSourceEntries)
        }
      };
      this.searchResults = data._embedded.externalSourceEntries;
      this.totalResults = data.page.totalElements;
    });

    this.selectResult(this.searchResults[0]);

  

  //   // Perform the search using the gndService
  //   this.gndService.getGndEntreiesByValue(
  //     term,
  //     0,
  //     'dc.author'
  //   ).pipe(
  //     catchError(() => {
  //       this.searchFailed = true; // Set searchFailed flag to true in case of error
  //       return of(buildPaginatedList(new PageInfo(), [])); // Return an empty list
  //     }),
  //     tap(() => this.searchFailed = false), // Reset searchFailed flag to false
  //     map((list: PaginatedList<VocabularyEntry>) => list), // Map the response to the PaginatedList
  //     tap((list: PaginatedList<VocabularyEntry>) => {
  //       // Update pagination information
  //       // const startIdx = (list.pageInfo.currentPage - 1) * list.pageInfo.elementsPerPage + 1;
  //       // const endIdx = Math.min(startIdx + list.pageInfo.elementsPerPage - 1, list.pageInfo.totalElements);
  //       // this.paginationInfo = `Results ${startIdx} - ${endIdx} of ${list.pageInfo.totalElements} total`;
  //     }),
  //     map((list: PaginatedList<VocabularyEntry>) => this.searchResults = list.page), // Extract the page array from the PaginatedList
  //     tap(() => this.changeSearchingStatus(false)), // Set searching status to false after search completes
  //     merge(this.hideSearchingWhenUnsubscribed$)
  //   ).subscribe((searchResults) => {
  //     // Assign search results to the component property
  //     this.searchResults = searchResults;
  //     console.log('Search results:', this.searchResults);
  //   });
  // }

  }

  // Set the selected result
  selectResult(result: any) {
    this.selectedGndRecord = result;
  }

  paginateResults(results: any[]): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return results.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > Math.ceil(this.totalResults / this.itemsPerPage)) {
      return; // Prevent navigating to invalid pages
    }
    this.currentPage = page;
    this.searchGNDAuthority(); // Refresh data based on the current page
  }

  goToPreviousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  goToNextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.searchGNDAuthority();
    }
  }

  getStartIndex(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  // Calculate the ending index of the current page
  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalResults);
  }

}
