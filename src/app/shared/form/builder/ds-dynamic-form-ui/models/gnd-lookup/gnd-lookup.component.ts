import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, of as observableOf, of } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, merge, switchMap, tap } from 'rxjs/operators';
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

@Component({
  selector: 'gnd-lookup',
  templateUrl: './gnd-lookup.component.html',
  styleUrls: ['./gnd-lookup.component.scss'],
})

export class GndLookupComponent extends DsDynamicVocabularyComponent implements OnInit {

  searchText = new FormControl('');
  searchResults: any;
  
  @Input() group: UntypedFormGroup;
  @Input() model: DynamicOneboxModel;
  @Output() blur: EventEmitter<any> = new EventEmitter<any>();@Output() change: EventEmitter<any> = new EventEmitter<any>();
  @Output() focus: EventEmitter<any> = new EventEmitter<any>();
  pageInfo: PageInfo = new PageInfo();


  click$ = new Subject<string>();
  private vocabulary$: Observable<Vocabulary>;
  searchFailed = false;
  hideSearchingWhenUnsubscribed$ = new Observable(() => () => this.changeSearchingStatus(false));
  inputValue: any;

  gndSearchForm: FormGroup;

  constructor(
    private activeModal: NgbActiveModal,
    protected vocabularyService: VocabularyService,
    protected layoutService: DynamicFormLayoutService,
    protected validationService: DynamicFormValidationService,
    private formBuilder: FormBuilder) {
    super(vocabularyService, layoutService, validationService);
  }


  search = (text$: Observable<string>) => {
    return text$.pipe(
      merge(this.click$),
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.changeSearchingStatus(true)),
      switchMap((term) => {
        if (term === '' || term.length < this.model.minChars) {
          return observableOf({ list: [] });
        } else {
          return this.vocabularyService.getVocabularyEntriesByValue(
            term,
            false,
            this.model.vocabularyOptions,
            this.pageInfo).pipe(
              getFirstSucceededRemoteDataPayload(),
              tap(() => this.searchFailed = false),
              catchError(() => {
                this.searchFailed = true;
                return observableOf(buildPaginatedList(
                  new PageInfo(),
                  []
                ));
              }));
        }
      }),
      map((list: PaginatedList<VocabularyEntry>) => list.page),
      tap(() => this.changeSearchingStatus(false)),
      merge(this.hideSearchingWhenUnsubscribed$)
    );
  };

  


  changeSearchingStatus(status: boolean) {
    // this.searching = status;
    // this.cdr.detectChanges();
  }

  setCurrentValue(value: any, init = false): void { // check the implementation
    // let result: string;
    // if (init) {
    //   this.getInitValueFromModel()
    //     .subscribe((formValue: FormFieldMetadataValueObject) => {
    //       this.currentValue = formValue;
    //       this.cdr.detectChanges();
    //     });
    // } else {
    //   if (isEmpty(value)) {
    //     result = '';
    //   } else {
    //     result = value.value;
    //   }

    //   this.currentValue = result;
    //   this.cdr.detectChanges();
    // }

  }

  ngOnInit(): void {
    this.loadForm();
    if (this.model.value) {
      this.setCurrentValue(this.model.value, true);
    }

    this.vocabulary$ = this.vocabularyService.findVocabularyById(this.model.vocabularyOptions.name).pipe(
      getFirstSucceededRemoteDataPayload(),
      distinctUntilChanged()
    );
  }

  loadForm() {
    this.gndSearchForm = this.formBuilder.group({
      searchText: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get gndSearchFormControl(){
    return this.gndSearchForm.controls;
  }

  cancel(): void {
    this.activeModal.close();
  }

  selectTheRecord(): void {
    this.activeModal.close();
  }

  

  // searchGNDAuthority() {
  //   // Perform the API call here using HttpClient
  //   // Replace 'your-api-endpoint' with your actual API endpoint
  //   const apiUrl = 'your-api-endpoint?search=' + this.searchText;

  //   // Make the HTTP GET request
  //   this.http.get(apiUrl).subscribe((response) => {
  //     // Handle the response here
  //     console.log('API Response:', response);
  //   }, (error) => {
  //     // Handle errors here
  //     console.error('API Error:', error);
  //   });
  // }

  searchGNDAuthority() {
    // this.changeSearchingStatus(true); 
    // const term = this.searchText.value.trim();
    // if (term === '' || term.length < this.model.minChars) {
    //   this.changeSearchingStatus(false); 
    //   return; 
    // }

    // // Perform the search using the vocabularyService

    // this.model.vocabularyOptions
    // this.vocabularyService.getVocabularyEntriesByValue(
    //   term,
    //   false,
    //   this.model.vocabularyOptions,
    //   this.pageInfo
    // ).pipe(
    //   catchError(() => {
    //     this.searchFailed = true; 
    //     return of(buildPaginatedList(new PageInfo(), [])); 
    //   }),
    //   tap(() => this.searchFailed = false), 
    //   map((list: PaginatedList<VocabularyEntry>) => list.page),
    //   tap(() => this.changeSearchingStatus(false)), 
    //   merge(this.hideSearchingWhenUnsubscribed$)
    // ).subscribe((searchResults) => {
    //   this.searchResults = searchResults;
    //   console.log('Search results:', this.searchResults);
    // });


    this.changeSearchingStatus(true); // Set searching status to true

const term = this.searchText.value.trim(); // Get the search term from the input field

if (term === '' || term.length < this.model.minChars) {
  this.changeSearchingStatus(false); // Set searching status to false
  return; // Exit the function early if search term is empty or too short
}

// Perform the search using the vocabularyService
this.vocabularyService.getVocabularyEntriesByValue(
  term,
  false,
  this.model.vocabularyOptions,
  this.pageInfo
).pipe(
  catchError(() => {
    this.searchFailed = true; // Set searchFailed flag to true in case of error
    return of(buildPaginatedList(new PageInfo(), [])); // Return an empty list
  }),
  tap(() => this.searchFailed = false), // Reset searchFailed flag to false
  map((list: PaginatedList<VocabularyEntry>) => list), // Map the response to the PaginatedList
  tap((list: PaginatedList<VocabularyEntry>) => {
    // Update pagination information
    // const startIdx = (list.pageInfo.currentPage - 1) * list.pageInfo.elementsPerPage + 1;
    // const endIdx = Math.min(startIdx + list.pageInfo.elementsPerPage - 1, list.pageInfo.totalElements);
    // this.paginationInfo = `Results ${startIdx} - ${endIdx} of ${list.pageInfo.totalElements} total`;
  }),
  map((list: PaginatedList<VocabularyEntry>) => this.searchResults=list.page), // Extract the page array from the PaginatedList
  tap(() => this.changeSearchingStatus(false)), // Set searching status to false after search completes
  merge(this.hideSearchingWhenUnsubscribed$)
).subscribe((searchResults) => {
  // Assign search results to the component property
  this.searchResults = searchResults;
  console.log('Search results:', this.searchResults);
});
  }


}
