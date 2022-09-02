import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import { Citation } from '../citation/citation.model';
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
import { VersionHistory } from '../shared/version-history.model';
import { Version } from '../shared/version.model';
import { Observable, of } from 'rxjs';
import { followLink } from '../../shared/utils/follow-link-config.model';
import { getFirstSucceededRemoteDataPayload } from '../shared/operators';
import { switchMap } from 'rxjs/operators';
import { Item } from '../shared/item.model';
import { RemoteData } from './remote-data';
import { Collection } from '../shared/collection.model';
import { dataService } from '../cache/builders/build-decorators';
import { CITATION_LIST } from '../citation/citation-list.resource-type';
import { CitationList } from '../citation/citation-list.model';

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
   *
   * @param item
   */
  getCitations$(item: Item): Observable<RemoteData<CitationList>> {
    return this.findByHref(item._links.citations.href)
  }

}
