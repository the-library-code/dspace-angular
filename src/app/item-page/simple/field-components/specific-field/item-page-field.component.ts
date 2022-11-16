import { Component, Input } from '@angular/core';
import { Item } from '../../../../core/shared/item.model';
import { BrowseService } from '../../../../../app/core/browse/browse.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrowseDefinition } from '../../../../core/shared/browse-definition.model';
import { BrowseLinkDataService } from '../../../../core/browse/browse-link-data.service';
import {
  getPaginatedListPayload
} from '../../../../core/shared/operators';
import { PaginatedList } from '../../../../core/data/paginated-list.model';


/**
 * This component can be used to represent metadata on a simple item page.
 * It expects one input parameter of type Item to which the metadata belongs.
 * This class can be extended to print certain metadata.
 */

@Component({
    templateUrl: './item-page-field.component.html'
})
export class ItemPageFieldComponent {

  browseDefinitions$: Observable<BrowseDefinition[]>;

  constructor(protected browseService: BrowseService, protected browseLinkDataService: BrowseLinkDataService) {
  }

  ngOnInit():void {
    this.browseDefinitions$ = this.browseLinkDataService.getLinkedIndices().pipe(
      map((paginatedList: PaginatedList<BrowseDefinition>) => paginatedList),
      getPaginatedListPayload(),
    )
  }

    /**
     * The item to display metadata for
     */
    @Input() item: Item;

    /**
     * Whether the {@link MarkdownPipe} should be used to render this metadata.
     */
    enableMarkdown = false;

    /**
     * Fields (schema.element.qualifier) used to render their values.
     */
    fields: string[];

    /**
     * Label i18n key for the rendered metadata
     */
    label: string;

    /**
     * Separator string between multiple values of the metadata fields defined
     * @type {string}
     */
    separator = '<br/>';

    /**
     * Whether any valid HTTP(S) URL should be rendered as a link
     */
    urlRegex?;

  /**
   * Return browse definition that matches any field used in this component if it is configured as a browse
   * link in dspace.cfg (webui.browse.link.<n>)
   */
  get browseDefinition(): Observable<BrowseDefinition> {
      if (this.browseDefinitions$ !== undefined) {
        // Check each field. The first one that matches a valid browse link and definition config is returned
        let searchKeyArray: string[] = [];
        this.fields.forEach((field: string) => {
          searchKeyArray = searchKeyArray.concat(BrowseService.toSearchKeyArray(field));
        });
        return this.browseDefinitions$.pipe(
          map((definitions: BrowseDefinition[]) => {
            let definition: BrowseDefinition = null;
            definitions.forEach((def: BrowseDefinition) => {
              def.metadataKeys.forEach((field: string) => {
                if (searchKeyArray.indexOf(field) > 0) {
                  definition = def;
                  return definition;
                }
              })
            });
            return definition;
          })
        )
      }
    }

}
