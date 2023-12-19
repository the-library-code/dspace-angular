import {ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { Observable, of as observableOf, Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SectionsType } from '../sections-type';
import { SectionModelComponent } from '../models/section.model';
import { renderSectionFor } from '../sections-decorator';
import { SectionDataObject } from '../models/section-data.model';
import { SubmissionService } from '../../submission.service';
import { AlertType } from '../../../shared/alert/alert-type';
import { SectionsService } from '../sections.service';

/**
 * Detect duplicates step
 *
 * @author Kim Shepherd
 */
@Component({
  selector: 'ds-submission-section-duplicates',
  templateUrl: './section-duplicates.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

@renderSectionFor(SectionsType.Duplicates)
export class SubmissionSectionDuplicatesComponent extends SectionModelComponent {
  /**
   * The Alert categories.
   * @type {AlertType}
   */
  public AlertTypeEnum = AlertType;

  /**
   * Variable to track if the section is loading.
   * @type {boolean}
   */
  public isLoading = true;

  /**
   * Array to track all subscriptions and unsubscribe them onDestroy
   * @type {Array}
   */
  protected subs: Subscription[] = [];

  /**
   * Initialize instance variables.
   *
   * @param {PaginationService} paginationService
   * @param {TranslateService} translate
   * @param {SectionsService} sectionService
   * @param {SubmissionService} submissionService
   * @param {string} injectedCollectionId
   * @param {SectionDataObject} injectedSectionData
   * @param {string} injectedSubmissionId
   */
  constructor(protected translate: TranslateService,
              protected sectionService: SectionsService,
              protected submissionService: SubmissionService,
              @Inject('collectionIdProvider') public injectedCollectionId: string,
              @Inject('sectionDataProvider') public injectedSectionData: SectionDataObject,
              @Inject('submissionIdProvider') public injectedSubmissionId: string) {
    super(injectedCollectionId, injectedSectionData, injectedSubmissionId);
  }

  ngOnInit() {
      super.ngOnInit();
  }

  /**
   * Initialize all instance variables and retrieve configuration.
   */
  onSectionInit() {
    this.isLoading = false;
    this.subs.push(
      this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType)
        .subscribe((data: any) => {
          console.dir(data);
        })
    );
  }

  /**
   * Check if identifier section has read-only visibility
   */
  isReadOnly(): boolean {
    return true;
  }

  /**
   * Unsubscribe from all subscriptions, if needed.
   */
  onSectionDestroy(): void {
    return;
  }

  /**
   * Get section status. Because this simple component never requires human interaction, this is basically
   * always going to be the opposite of "is this section still loading". This is not the place for API response
   * error checking but determining whether the step can 'proceed'.
   *
   * @return Observable<boolean>
   *     the section status
   */
  public getSectionStatus(): Observable<boolean> {
    return observableOf(!this.isLoading);
  }

}
