import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../app/shared/animations/slide';
import { MetadataRepresentationListComponent as BaseComponent } from '../../../../../../app/item-page/simple/metadata-representation-list/metadata-representation-list.component';

@Component({
    selector: 'ds-metadata-representation-list',
    styleUrls: ['./metadata-representation-list.component.scss'],
    templateUrl: './metadata-representation-list.component.html',
    // templateUrl: '../../../../../../../app/item-page/simple/metadata-representation-list/metadata-representation-list.component.html',
    animations: [slideSidebarPadding],
})
export class MetadataRepresentationListComponent extends BaseComponent {

}
