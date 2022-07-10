import {Component, Input} from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { CommunityPageSubCollectionListComponent } from './community-page-sub-collection-list.component';
import {Community} from '../../core/shared/community.model';

/**
 * Themed wrapper for CollectionPageComponent
 */
@Component({
  selector: 'ds-themed-community-page-sub-collection-list',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})
export class ThemedCommunityPageSubCollectionListComponent
  extends ThemedComponent<CommunityPageSubCollectionListComponent> {

  @Input() community: Community;

  inAndOutputNames: (keyof CommunityPageSubCollectionListComponent
    & keyof this)[] = ['community'];

  protected getComponentName(): string {
    return 'CommunityPageSubCollectionListComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/community-page/sub-collection-list/community-page-sub-collection-list.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./community-page-sub-collection-list.component`);
  }
}
