import {Component, Input} from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { ComcolPageBrowseByComponent } from './comcol-page-browse-by.component';

/**
 * Themed wrapper for ComcolPageBrowseByComponent
 */
@Component({
    selector: 'ds-themed-comcol-page-browse-by',
    styleUrls: [],
    templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedComcolPageBrowseByComponent extends ThemedComponent<ComcolPageBrowseByComponent> {

    /**
     * The ID of the Community or Collection
     */
    @Input() id: string;
    @Input() contentType: string;

    protected inAndOutputNames: (keyof ComcolPageBrowseByComponent & keyof this)[] = ['id', 'contentType'];
    protected getComponentName(): string {
        return 'ComcolPageBrowseByComponent';
    }

    protected importThemedComponent(themeName: string): Promise<any> {
        return import(`../../../themes/${themeName}/app/shared/comcol-page-browse-by/comcol-page-browse-by.component`);
    }

    protected importUnthemedComponent(): Promise<any> {
        return import(`./comcol-page-browse-by.component`);
    }
}