import {Component, Input} from '@angular/core';
import { ThemedComponent } from '../../../../../theme-support/themed.component';
import { ItemSearchResultListElementComponent } from './item-search-result-list-element.component';
import {CollectionElementLinkType} from '../../../../../object-collection/collection-element-link.type';
import {ListableObject} from '../../../../../object-collection/shared/listable-object.model';

/**
 * Themed wrapper for ItemSearchResultListElementComponent
 */
@Component({
    selector: 'ds-themed-item-search-result-list-element',
    styleUrls: [],
    templateUrl: '../../../../../theme-support/themed.component.html',
})
export class ThemedItemSearchResultListElementComponent<T extends ListableObject> extends ThemedComponent<ItemSearchResultListElementComponent> {
    /**
     * The object to render in this list element
     */
    @Input() object: T;
    /**
     * Whether to show the badge label or not
     */
    @Input() showLabel = true;
    /**
     * The link type to determine the type of link rendered in this element
     */
    @Input() linkType: CollectionElementLinkType;

    protected inAndOutputNames: (keyof ItemSearchResultListElementComponent & keyof this)[] = ['object', 'showLabel', 'linkType'];
    protected getComponentName(): string {
        return 'ItemSearchResultListElementComponent';
    }

    protected importThemedComponent(themeName: string): Promise<any> {
        return import(`../../../../../../../themes/${themeName}/app/shared/object-list/search-result-list-element/item-search-result/item-types/item/item-search-result-list-element.component`);
    }

    protected importUnthemedComponent(): Promise<any> {
        return import(`./item-search-result-list-element.component`);
    }
}
