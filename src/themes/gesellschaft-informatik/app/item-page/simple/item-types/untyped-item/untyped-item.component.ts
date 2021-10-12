import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Item } from '../../../../../../../app/core/shared/item.model';
import { ItemComponent } from '../../../../../../../app/item-page/simple/item-types/shared/item.component';
import { ViewMode } from '../../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {Context} from '../../../../../../../app/core/shared/context.model';

/**
 * Component that represents a publication Item page
 */

@listableObjectComponent('Project', ViewMode.StandalonePage, Context.Any, 'gesellschaft-informatik')
@listableObjectComponent(Item, ViewMode.StandalonePage)
@Component({
  selector: 'ds-untyped-item',
  styleUrls: ['./untyped-item.component.scss'],
  templateUrl: './untyped-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UntypedItemComponent extends ItemComponent {

}
