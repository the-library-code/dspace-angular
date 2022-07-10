import {Component, OnInit} from '@angular/core';
import { CommunityPageSubCommunityListComponent as BaseComponent } from '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component';

import { fadeIn } from '../../../../../app/shared/animations/fade';
import {PaginationComponentOptions} from '../../../../../app/shared/pagination/pagination-component-options.model';
import {SortDirection, SortOptions} from '../../../../../app/core/cache/models/sort-options.model';

@Component({
  selector: 'ds-community-page-sub-community-list',
  styleUrls: ['../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.scss'],
  templateUrl: '../../../../../app/community-page/sub-community-list/community-page-sub-community-list.component.html',
  animations:[fadeIn]
})
export class CommunityPageSubCommunityListComponent extends BaseComponent
  implements OnInit {

  ngOnInit(): void {
    this.config = new PaginationComponentOptions();
    this.config.id = this.pageId;
    this.config.pageSize = 8;
    this.config.currentPage = 1;

    this.config.pageSizeOptions[0] = 1;
    this.config.pageSizeOptions[1] = 4;
    this.config.pageSizeOptions[2] = 8;
    this.config.pageSizeOptions[3] = 16;
    this.config.pageSizeOptions[4] = 32;
    this.config.pageSizeOptions[5] = 64;
    this.config.pageSizeOptions[6] = 80;
    this.config.pageSizeOptions[7] = 100;

    this.sortConfig = new SortOptions('dc.title', SortDirection.ASC);
    this.initPage();
  }

}
