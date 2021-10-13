import { Component } from '@angular/core';
import { slideSidebarPadding } from '../../../../../../../app/shared/animations/slide';
import { FileSectionComponent as BaseComponent } from '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component';

@Component({
    selector: 'ds-item-page-file-section',
    styleUrls: ['./file-section.component.scss'],
    templateUrl: './file-section.component.html',
    // templateUrl: '../../../../../../../app/item-page/simple/field-components/file-section/file-section.component.html',
    animations: [slideSidebarPadding],
})
export class FileSectionComponent extends BaseComponent {

}
