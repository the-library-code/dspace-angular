import { Component, OnInit } from '@angular/core';
import { CrisLayoutBox } from '../../decorators/cris-layout-box.decorator';
import { CrisLayoutBoxModelComponent as CrisLayoutBoxObj } from '../../models/cris-layout-box.model';
import { LayoutPage } from '../../enums/layout-page.enum';
import { LayoutTab } from '../../enums/layout-tab.enum';
import { LayoutBox } from '../../enums/layout-box.enum';
import { OrcidQueueService } from '../../../core/orcid/orcid-queue.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { RemoteData } from '../../../core/data/remote-data';
import { PaginatedList } from '../../../core/data/paginated-list.model';
import { OrcidQueue } from '../../../core/orcid/model/orcid-queue.model';
import { hasValue } from '../../../shared/empty.util';
import { PaginationComponentOptions } from '../../../shared/pagination/pagination-component-options.model';
import { uniqueId } from 'lodash';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from '../../../shared/notifications/notifications.service';
import { OrcidHistoryService } from '../../../core/orcid/orcid-history.service';
import { OrcidHistory } from '../../../core/orcid/model/orcid-history.model';

@Component({
  selector: 'ds-orcid-sync-queue.component',
  templateUrl: './orcid-sync-queue.component.html'
})
@CrisLayoutBox(LayoutPage.DEFAULT, LayoutTab.ORCID, LayoutBox.ORCID_SYNC_QUEUE)
export class OrcidSyncQueueComponent extends CrisLayoutBoxObj implements OnInit {

  /**
   * A list of orcid queue records
   */
  private list$: BehaviorSubject<RemoteData<PaginatedList<OrcidQueue>>> = new BehaviorSubject<RemoteData<PaginatedList<OrcidQueue>>>({} as any);

  /**
   * Array to track all subscriptions and unsubscribe them onDestroy
   * @type {Array}
   */
  private subs: Subscription[] = [];

  /**
   * Pagination config used to display the list
   */
  public paginationOptions: PaginationComponentOptions = new PaginationComponentOptions();

  constructor(private orcidQueueService: OrcidQueueService,
              private translateService: TranslateService,
              private notificationsService: NotificationsService,
              private orcidHistoryService: OrcidHistoryService) {
    super();
  }

  ngOnInit() {
    super.ngOnInit();

    this.paginationOptions.id = uniqueId('orcid-queue-list-pagination');
    this.paginationOptions.pageSize = 5;

    this.updateList();
  }

  updateList() {
    this.subs.push(this.orcidQueueService.searchByOwnerId(this.item.id, this.paginationOptions)
      .subscribe((result) => {
        return this.list$.next(result);
      }));
  }

  /**
   * Method called on page change
   */
  onPageChange(page: number): void {
    this.paginationOptions.currentPage = page;
    this.updateList();
  }

  /**
   * Return the list of orcid queue records
   */
  getList(): Observable<RemoteData<PaginatedList<OrcidQueue>>> {
    return this.list$.asObservable();
  }

  getIconClass(orcidQueue: OrcidQueue): string {
    if (!orcidQueue.entityType) {
      return 'fa fa-book';
    }
    switch (orcidQueue.entityType) {
      case 'Publication':
        return 'fa fa-book';
      case 'Person':
        return 'fa fa-user';
      case 'Project':
        return 'fa fa-folder';
      default:
        return 'fa fa-book';
    }
  }

  deleteEntry(orcidQueue: OrcidQueue) {
    this.subs.push(this.orcidQueueService.deleteById(orcidQueue.id)
      .subscribe((restResponse) => {
        if (restResponse.isSuccess) {
          this.notificationsService.success(this.translateService.get('person.page.orcid.sync-queue.delete.success'));
          this.updateList();
        } else {
          this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.delete.error'));
        }
      }));
  }

  send( orcidQueue: OrcidQueue ) {
    this.subs.push(this.orcidHistoryService.sendToORCID(orcidQueue)
      .subscribe((restResponse) => {
        if (restResponse.hasSucceeded) {

          const orcidHistory: OrcidHistory = restResponse.payload;
          switch (orcidHistory.status) {
            case 200:
            case 201:
              this.notificationsService.success(this.translateService.get('person.page.orcid.sync-queue.send.success'));
              this.updateList();
              break;
            case 404:
              this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.not-found-error'));
              break;
            case 409:
              this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.conflict-error'));
              break;
            default:
              this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.error'));
          }

        } else {
          this.notificationsService.error(this.translateService.get('person.page.orcid.sync-queue.send.error'));
        }
      }));
  }

  /**
   * Unsubscribe from all subscriptions
   */
  ngOnDestroy(): void {
    this.list$ = null;
    this.subs.filter((subscription) => hasValue(subscription))
      .forEach((subscription) => subscription.unsubscribe());
  }
}