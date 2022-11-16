import { Injectable } from '@angular/core';
import { BROWSE_DEFINITION } from '../shared/browse-definition.resource-type';
import { BrowseDefinition } from '../shared/browse-definition.model';
import { RequestService } from '../data/request.service';
import { RemoteDataBuildService } from '../cache/builders/remote-data-build.service';
import { ObjectCacheService } from '../cache/object-cache.service';
import { HALEndpointService } from '../shared/hal-endpoint.service';
import { FollowLinkConfig } from '../../shared/utils/follow-link-config.model';
import { Observable } from 'rxjs';
import { RemoteData } from '../data/remote-data';
import { PaginatedList } from '../data/paginated-list.model';
import { FindListOptions } from '../data/find-list-options.model';
import { IdentifiableDataService } from '../data/base/identifiable-data.service';
import { FindAllData, FindAllDataImpl } from '../data/base/find-all-data';
import { dataService } from '../data/base/data-service.decorator';
import { BrowseDefinitionDataService } from './browse-definition-data.service';
import { HrefOnlyDataService } from '../data/href-only-data.service';
import {
  getFirstCompletedRemoteData,
  getFirstSucceededRemoteData,
  getFirstSucceededRemoteDataWithNotEmptyPayload, getPaginatedListPayload,
  getRemoteDataPayload
} from '../shared/operators';
import { map } from 'rxjs/operators';

/**
 * Data service responsible for retrieving browse definitions from the REST server, IF AND ONLY IF
 * they are configured as browse links (webui.browse.link.<n>)
 */
@Injectable()
export class BrowseLinkDataService extends IdentifiableDataService<BrowseDefinition> {
  private findAllData: FindAllDataImpl<BrowseDefinition>;

  constructor(
    protected requestService: RequestService,
    protected rdbService: RemoteDataBuildService,
    protected objectCache: ObjectCacheService,
    protected halService: HALEndpointService,
    protected browseDefinitionDataService: BrowseDefinitionDataService
  ) {
    super('browselinks', requestService, rdbService, objectCache, halService);
    this.findAllData = new FindAllDataImpl(this.linkPath, requestService, rdbService, objectCache, halService, this.responseMsToLive);
  }

  /**
   * Get definition for a single field if it's configured
   * @param field
   */
  getLinkForField(field: string):Observable<BrowseDefinition> {
    return this.findById(field).pipe(
      getFirstSucceededRemoteDataWithNotEmptyPayload()
    );
  }

  /**
   * Get definitions for all fields that are configured as browse links
   */
  getLinkedIndices(): Observable<PaginatedList<BrowseDefinition>> {
    return this.findAllData.findAll().pipe(
      getFirstSucceededRemoteDataWithNotEmptyPayload()
    );
  }
}

