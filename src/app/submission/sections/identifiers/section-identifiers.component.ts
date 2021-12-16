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
  /*
  constructor(protected paginationService: PaginationService,
              protected translate: TranslateService,
              protected sectionService: SectionsService,
              protected submissionService: SubmissionService,
              @Inject('collectionIdProvider') public injectedCollectionId: string,
              @Inject('sectionDataProvider') public injectedSectionData: SectionDataObject,
              @Inject('submissionIdProvider') public injectedSubmissionId: string) {

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

  // TODO: better logic here instead of "always true"
  getSectionStatus(): Observable<boolean> {
    return true as Observable<boolean>;
  }

  /**
   * Get identifier data (from the REST service) as a simple object with doi, handle, otherIdentifiers variables
   * and as an observable so it can update in real-time.
   */
  getIdentifierData() {
    return this.sectionService.getSectionData(this.submissionId, this.sectionData.id, this.sectionData.sectionType) as Observable<WorkspaceitemSectionIdentifiersObject>
  }

}
