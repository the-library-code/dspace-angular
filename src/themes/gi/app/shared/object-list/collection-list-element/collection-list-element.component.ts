import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';

import {Collection} from '../../../../../../app/core/shared/collection.model';
import {
  CollectionListElementComponent as BaseComponent
} from '../../../../../../app/shared/object-list/collection-list-element/collection-list-element.component';
import {ViewMode} from '../../../../../../app/core/shared/view-mode.model';
import {
  listableObjectComponent
} from '../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {Context} from '../../../../../../app/core/shared/context.model';
import {GiDataService} from '../../gi-data.service';

@listableObjectComponent(Collection, ViewMode.ListElement, Context.Any, 'gi')

@Component({
  selector: 'ds-collection-list-element',
  styleUrls: ['./collection-list-element.component.scss'],
  templateUrl: './collection-list-element.component.html'
})
/**
 * Component representing list element for a collection
 */
export class CollectionListElementComponent extends BaseComponent
  implements OnInit, OnDestroy {

  logoSub;
  numberSub;
  thumbnailUrl;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.object.uuid);

    // this subscription is direct, we have to manage it ourselves -> onDestroy
    this.logoSub = this.gidata.getReq(this.object._links.logo.href).subscribe(result => {
      this.thumbnailUrl = result._links.content.href;
      this.ref.markForCheck();
    });
  }

  ngOnDestroy() {
    this.logoSub.unsubscribe();
  }
}

