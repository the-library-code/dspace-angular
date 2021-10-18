import { ThemedComponent } from '../../../shared/theme-support/themed.component';
import { Component, Input } from '@angular/core';
import { MetadataRepresentationListComponent} from './metadata-representation-list.component';
import {Item} from '../../../core/shared/item.model';

@Component({
    selector: 'ds-themed-metadata-representation-list',
    styleUrls: [],
    templateUrl: '../../../shared/theme-support/themed.component.html',
})
export class ThemedMetadataRepresentationListComponent extends ThemedComponent<MetadataRepresentationListComponent> {
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

    protected inAndOutputNames: (keyof MetadataRepresentationListComponent & keyof this)[] = ['parentItem', 'itemType', 'metadataFields', 'label', 'incrementBy'];

    protected getComponentName(): string {
        return 'MetadataRepresentationListComponent';
    }

    protected importThemedComponent(themeName: string): Promise<any> {
        return import(`../../../../themes/${themeName}/app/item-page/simple/metadata-representation-list/metadata-representation-list.component`);
    }

    protected importUnthemedComponent(): Promise<any> {
        return import(`./metadata-representation-list.component`);
    }

}
