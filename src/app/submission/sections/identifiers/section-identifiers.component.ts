import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';

import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

import { SectionsType } from '../sections-type';
import { SectionModelComponent } from '../models/section.model';
import { renderSectionFor } from '../sections-decorator';
import { SectionDataObject } from '../models/section-data.model';
import { SubmissionService } from '../../submission.service';
import { AlertType } from '../../../shared/alert/aletr-type';
import { SectionsService } from '../sections.service';
import { WorkspaceitemSectionIdentifiersObject } from '../../../core/submission/models/workspaceitem-section-identifiers.model';
import { PaginationService } from '../../../core/pagination/pagination.service';
import { SubmissionVisibility } from '../../utils/visibility.util';
import {map} from 'rxjs/operators';

/**
 * This simple component displays DOI, handle and other identifiers that are already minted for the item in
 * a workflow / submission section.
 * ShowMintIdentifierStep will attempt to reserve an identifier before injecting result data for this component.
 *
 * @author Kim Shepherd
 */
@Component({
  selector: 'ds-submission-section-identifiers',
  templateUrl: './section-identifiers.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

@renderSectionFor(SectionsType.Identifiers)
export class SubmissionSectionIdentifiersComponent extends SectionModelComponent {
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
   * If TRUE the submission scope is the 'workflow'; 'workspace' otherwise.
   * @type {boolean}
   */
  isWorkFlow = false;

  /**
   * Observable identifierData subject
   * @type {Observable<WorkspaceitemSectionIdentifiersObject>}
   */
  public identifierData$: Observable<WorkspaceitemSectionIdentifiersObject>;

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

  /**
   * Initialize all instance variables and retrieve configuration.
   */
  onSectionInit() {
    this.isLoading = false;
    this.identifierData$ = this.getIdentifierData();
  }

  /**
   * Check if upload section has read-only visibility
   */
  isReadOnly(): boolean {
    return SubmissionVisibility.isReadOnly(
      this.sectionData.sectionVisibility,
      this.submissionService.getSubmissionScope()
    );
  }

  /**
   * Unsubscribe from all subscriptions, if needed.
   */
  onSectionDestroy(): void {
    return;
  }

  /**
   * Get section status. Because this simple component never requires human interaction, we'll instead just at least
   * make sure we got a non-error response from the API, and look for our expected Object keys
   *
   * @return Observable<boolean>
   *     the section status
   */
  public getSectionStatus(): Observable<boolean> {
    if (this.identifierData$ === undefined) {
      this.identifierData$ = this.getIdentifierData();
    }
    return this.identifierData$.pipe(
      map((identifierData: any) => {
        let output = false;
        // We have a successful identifier list from the API if all three expected keys from the object model appear
        if (identifierData.hasOwnProperty('doi') && identifierData.hasOwnProperty('handle')
          && identifierData.hasOwnProperty('otherIdentifiers')) {
          output = true;
        }
        return output;
      })
    );
  }

  /**
   * Get identifier data (from the REST service) as a simple object with doi, handle, otherIdentifiers variables
   * and as an observable so it can update in real-time.
   */
  getIdentifierData() {
    return this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType) as
      Observable<WorkspaceitemSectionIdentifiersObject>;
  }

}
