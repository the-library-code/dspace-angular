import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

import { SectionsType } from '../sections-type';
import { SectionModelComponent } from '../models/section.model';
import { renderSectionFor } from '../sections-decorator';
import { SectionDataObject } from '../models/section-data.model';
import { PaginationComponentOptions } from '../../../shared/pagination/pagination-component-options.model';
import { SubmissionService } from '../../submission.service';
import { SubmissionScopeType } from '../../../core/submission/submission-scope-type';
import { AlertType } from '../../../shared/alert/aletr-type';
import { SectionsService } from '../sections.service';
import { WorkspaceitemSectionIdentifiersObject } from '../../../core/submission/models/workspaceitem-section-identifiers.model';
import { PaginationService } from '../../../core/pagination/pagination.service';
import { SubmissionVisibility } from '../../utils/visibility.util';

/**
 * This component represents a section that contains possible duplications.
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
   * The object containing data about doi, handle, other identifiers
   * @type {Observable}
   */
  public sectionData$: Observable<WorkspaceitemSectionIdentifiersObject>;

  /**
   * The pagination system configuration for HTML listing.
   * @type {PaginationComponentOptions}
   */
  config$: Observable<PaginationComponentOptions>;

  /**
   * If TRUE the submission scope is the 'workflow'; 'workspace' otherwise.
   * @type {boolean}
   */
  isWorkFlow = false;

  /**
   * The list of the possible duplications.
   * @type {PaginationComponentOptions}
   */
  disclaimer: Observable<string>;

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
  constructor(protected paginationService: PaginationService,
              protected translate: TranslateService,
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
    const config = new PaginationComponentOptions();
    config.id = 'identifiers';
    config.pageSize = 2;
    config.pageSizeOptions = [1, 2, 5];
    this.config$ = this.paginationService.getCurrentPagination(config.id, config);

    if (this.submissionService.getSubmissionScope() === SubmissionScopeType.WorkflowItem) {
      this.isWorkFlow = true;
    } else {
      this.isWorkFlow = false;
    }

    this.isLoading = false;
  }

  /**
   * Get section status.
   *
   * @return Observable<boolean>
   *     the section status
   */
  public getSectionStatus(): Observable<boolean> {
    return this.sectionData$.pipe(
      map((totalMatches: any) => {
        let output = false;
        if (Object.keys(totalMatches.matches).length === 0) {
          output = true;
        }
        return output;
      })
    );
  }

  /**
   * The data of this section.
   */
  get data(): WorkspaceitemSectionIdentifiersObject {
    return this.sectionData.data as WorkspaceitemSectionIdentifiersObject;
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

}
