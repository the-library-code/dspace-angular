import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import { RequestService } from './request.service';
import { RemoteDataBuildService } from '../cache/builders/remote-data-build.service';
import { Store } from '@ngrx/store';
import { CoreState } from '../core-state.model';
import { ObjectCacheService } from '../cache/object-cache.service';
import { HALEndpointService } from '../shared/hal-endpoint.service';
import { NotificationsService } from '../../shared/notifications/notifications.service';
import { VersionDataService } from './version-data.service';
import { HttpClient } from '@angular/common/http';
import { DefaultChangeAnalyzer } from './default-change-analyzer.service';
import { Observable, of } from 'rxjs';
import { Item } from '../shared/item.model';
import { RemoteData } from './remote-data';
import { dataService } from '../cache/builders/build-decorators';
import { CITATION_LIST } from '../citation/citation-list.resource-type';
import { CitationList } from '../citation/citation-list.model';

/**
 * Simple data service to return linked citations for an item
 *
 * @author Kim Shepherd
 */
@Injectable()
@dataService(CITATION_LIST)
export class CitationDataService extends DataService<CitationList> {
  protected linkPath = 'citations';
  protected versionsEndpoint = 'citations';

  constructor(
    protected requestService: RequestService,
    protected rdbService: RemoteDataBuildService,
    protected store: Store<CoreState>,
    protected objectCache: ObjectCacheService,
    protected halService: HALEndpointService,
    protected notificationsService: NotificationsService,
    protected versionDataService: VersionDataService,
    protected http: HttpClient,
    protected comparator: DefaultChangeAnalyzer<CitationList>) {
    super();
  }


  /**
   * Get list of formatted citations for a given item
   * @param item
   */
  getCitations$(item: Item): Observable<RemoteData<CitationList>> {
    return this.findByHref(item._links.citations.href)
  }

}
