import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Item } from '../../../../core/shared/item.model';
import { getItemPageRoute } from '../../../item-page-routing-paths';
import { RouteService } from '../../../../core/services/route.service';
import { Observable } from 'rxjs';
import { BrowseService } from '../../../../../app/core/browse/browse.service';
import { BrowseDefinitionDataService } from '../../../../../app/core/browse/browse-definition-data.service';
import { getDSpaceQuery, isIiifEnabled, isIiifSearchEnabled } from './item-iiif-utils';
import { getBrowseDefinitionLinks, getFirstCompletedRemoteData } from '../../../../core/shared/operators';
import { PaginatedList } from '../../../../core/data/paginated-list.model';
import { BrowseDefinition } from '../../../../core/shared/browse-definition.model';
import { RemoteData } from '../../../../core/data/remote-data';
import { hasValueOperator } from '../../../../shared/empty.util';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ds-item',
  template: ''
})
/**
 * A generic component for displaying metadata and relations of an item
 */
export class ItemComponent implements OnInit {
  @Input() object: Item;

  /**
   * Route to the item page
   */
  itemPageRoute: string;

  /**
   * Enables the mirador component.
   */
  iiifEnabled: boolean;

  /**
   * Used to configure search in mirador.
   */
  iiifSearchEnabled: boolean;

  /**
   * The query term from the previous dspace search.
   */
  iiifQuery$: Observable<string>;

  browseDefinitions: BrowseDefinition[];
  browseDefinitions$: Observable<BrowseDefinition[]>;

  mediaViewer;

  constructor(protected routeService: RouteService, protected browseService: BrowseService) {
    this.mediaViewer = environment.mediaViewer;
  }

  ngOnInit(): void {
    this.itemPageRoute = getItemPageRoute(this.object);
    // check to see if iiif viewer is required.
    this.iiifEnabled = isIiifEnabled(this.object);
    this.iiifSearchEnabled = isIiifSearchEnabled(this.object);
    if (this.iiifSearchEnabled) {
      this.iiifQuery$ = getDSpaceQuery(this.object, this.routeService);
    }

    this.browseDefinitions$ = this.browseService.getBrowseDefinitions().pipe(
      map((data) => data.payload.page as BrowseDefinition[])
    );

    this.browseService.getBrowseURLFor("dc.date.accessioned", "items").pipe(
      map((data) => {
        console.dir(data);
      })
    )

  }
}
