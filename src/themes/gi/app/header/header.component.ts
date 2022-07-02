import { Component } from '@angular/core';
import { HeaderComponent as BaseComponent } from '../../../../app/header/header.component';
import { MenuService } from '../../../../app/shared/menu/menu.service';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-header',
  styleUrls: ['header.component.scss'],
  // styleUrls: ['../../../../app/header/header.component.scss'],
  templateUrl: 'header.component.html',
  // templateUrl: '../../../../app/header/header.component.html',
})
export class HeaderComponent extends BaseComponent {

  constructor(
    private mS: MenuService) {
    super(mS);
  }

  // overriding the method from super()
  public toggleNavbar(): void {
    this.mS.toggleMenu(this.menuID);
    // for GI: open 'browse_global'-section if menu is opened on mobile screens (xs, sm)
    // if (this.menuService.isMenuVisible(this.menuID)) {
    this.mS.activateSection(this.menuID, 'browse_global');
    // }
    // else {
    //  this.menuService.deactivateSection(this.menuID, 'browse_global');
    // }
    // end GI second menu level toggle
  }
}
