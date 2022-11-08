import { Component, Input } from '@angular/core';
import { MetadataRepresentation } from '../../../core/shared/metadata-representation/metadata-representation.model';
import {
  combineLatest as observableCombineLatest,
  Observable,
  of as observableOf,
  zip as observableZip
} from 'rxjs';
import { RelationshipDataService } from '../../../core/data/relationship-data.service';
import { MetadataValue } from '../../../core/shared/metadata.models';
import { getBrowseDefinitionLinks, getFirstSucceededRemoteData } from '../../../core/shared/operators';
import { filter, map, switchMap } from 'rxjs/operators';
import { RemoteData } from '../../../core/data/remote-data';
import { Relationship } from '../../../core/shared/item-relationships/relationship.model';
import { Item } from '../../../core/shared/item.model';
import { MetadatumRepresentation } from '../../../core/shared/metadata-representation/metadatum/metadatum-representation.model';
import { ItemMetadataRepresentation } from '../../../core/shared/metadata-representation/item/item-metadata-representation.model';
import { followLink } from '../../../shared/utils/follow-link-config.model';
import { AbstractIncrementalListComponent } from '../abstract-incremental-list/abstract-incremental-list.component';
import { BrowseService } from '../../../core/browse/browse.service';

@Component({
  selector: 'ds-metadata-representation-list',
  templateUrl: './metadata-representation-list.component.html'
})
/**
 * This component is used for displaying metadata
 * It expects an item and a metadataField to fetch metadata
 * It expects an itemType to resolve the metadata to a an item
 * It expects a label to put on top of the list
 */
export class MetadataRepresentationListComponent extends AbstractIncrementalListComponent<Observable<MetadataRepresentation[]>> {
  /**
   * The parent of the list of related items to display
   */
  @Input() parentItem: Item;

  /**
   * The type of item to create a representation of
   */
  @Input() itemType: string;

  /**
   * The metadata field to use for fetching metadata from the item
   */
  @Input() metadataFields: string[];

  /**
   * An i18n label to use as a title for the list
   */
  @Input() label: string;

  /**
   * The amount to increment the list by when clicking "view more"
   * Defaults to 10
   * The default can optionally be overridden by providing the limit as input to the component
   */
  @Input() incrementBy = 10;

  /**
   * The total amount of metadata values available
   */
  total: number;

  constructor(public relationshipService: RelationshipDataService, public browseService?: BrowseService) {
    super();
    this.browseService = browseService;
  }

  /**
   * Get a specific page
   * @param page  The page to fetch
   */
  getPage(page: number): Observable<MetadataRepresentation[]> {
    const metadata = this.parentItem.findMetadataSortedByPlace(this.metadataFields);
    this.total = metadata.length;
    return this.resolveMetadataRepresentations(metadata, page);
  }

  /**
   * Resolve a list of metadata values to a list of metadata representations
   * @param metadata  The list of all metadata values
   * @param page      The page to return representations for
   */
  resolveMetadataRepresentations(metadata: MetadataValue[], page: number): Observable<MetadataRepresentation[]> {
    return observableZip(
      ...metadata
        .slice((this.objects.length * this.incrementBy), (this.objects.length * this.incrementBy) + this.incrementBy)
        .map((metadatum: any) => Object.assign(new MetadataValue(), metadatum))
        .map((metadatum: MetadataValue) => {
          if (metadatum.isVirtual) {
            return this.relationshipService.findById(metadatum.virtualValue, true, false, followLink('leftItem'), followLink('rightItem')).pipe(
              getFirstSucceededRemoteData(),
              switchMap((relRD: RemoteData<Relationship>) =>
                observableCombineLatest(relRD.payload.leftItem, relRD.payload.rightItem).pipe(
                  filter(([leftItem, rightItem]) => leftItem.hasCompleted && rightItem.hasCompleted),
                  map(([leftItem, rightItem]) => {
                    if (!leftItem.hasSucceeded || !rightItem.hasSucceeded) {
                      return observableOf(Object.assign(new MetadatumRepresentation(this.itemType), metadatum));
                    } else if (rightItem.hasSucceeded && leftItem.payload.id === this.parentItem.id) {
                      return rightItem.payload;
                    } else if (rightItem.payload.id === this.parentItem.id) {
                      return leftItem.payload;
                    }
                  }),
                  // This will render an item (eg. a person entity) as a metadata representation on a relation page
                  // and is mutually exlusive from browse linking
                  map((item: Item) => Object.assign(new ItemMetadataRepresentation(metadatum), item))
                )
              ));
          } else {
            // We can have multiple fields here, and in the browse defs... conflicts are possible but not expected
            // - we may need to raise this at some stage since you could have mis-matched field and config lists...?
              this.browseService.getBrowseDefinitionFor(this.metadataFields[0]).pipe(
                map((def) => {
                  console.dir(def);
                  if (def !== undefined) {
                    //return observableOf(Object.assign(new MetadatumRepresentation(this.itemType), metadatum));
                  }
                })
              )

            return observableOf(Object.assign(new MetadatumRepresentation(this.itemType), metadatum));

            /*
            this.metadataFields.forEach((field) => {
              this.browseService.getBrowseDefinitionFor(field).pipe(
                map((def) => {
                  return observableOf(Object.assign(new MetadatumRepresentation(this.itemType, def), metadatum));
                })
              )
            })

             */
          }
        })
    );
  }
}
