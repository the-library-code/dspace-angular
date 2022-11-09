import { Component, Input } from '@angular/core';
import { Item } from '../../../../core/shared/item.model';
import { BrowseService } from '../../../../../app/core/browse/browse.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { BrowseDefinition } from '../../../../core/shared/browse-definition.model';


/**
 * This component can be used to represent metadata on a simple item page.
 * It expects one input parameter of type Item to which the metadata belongs.
 * This class can be extended to print certain metadata.
 */

@Component({
    templateUrl: './item-page-field.component.html'
})
export class ItemPageFieldComponent {

  constructor(protected browseService: BrowseService) {
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

    get browseDefinition(): Observable<BrowseDefinition> {
      return this.browseService.getBrowseDefinitionFor(this.fields[0]).pipe(
        map((def) => {
          return def;
        })
      );
    }

}
