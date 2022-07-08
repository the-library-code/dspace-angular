import {Component, OnInit} from '@angular/core';

import { Community } from '../../../../../../app/core/shared/community.model';
import {
  CommunityListElementComponent as BaseComponent
} from '../../../../../../app/shared/object-list/community-list-element/community-list-element.component';
import { ViewMode } from '../../../../../../app/core/shared/view-mode.model';
import { listableObjectComponent } from '../../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {Context} from '../../../../../../app/core/shared/context.model';
import {GiDataService} from '../../gi-data.service';

@listableObjectComponent(Community,  ViewMode.ListElement, Context.Any, 'gi')

@Component({
  selector: 'ds-community-list-element',
  styleUrls: ['./community-list-element.component.scss'],
  templateUrl: './community-list-element.component.html'
})
/**
 * Component representing a list element for a community
 */
export class CommunityListElementComponent extends BaseComponent
                                          implements OnInit {

  numberSub;

  constructor(private gidata: GiDataService) {
    super();
  }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.object.uuid);
  }
}
