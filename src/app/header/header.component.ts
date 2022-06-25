import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuService } from '../shared/menu/menu.service';
import { MenuID } from '../shared/menu/initial-menus-state';

/**
 * Represents the header with the logo and simple navigation
 */
@Component({
  selector: 'ds-header',
  styleUrls: ['header.component.scss'],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {
  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;
  public showAuth = false;
  menuID = MenuID.PUBLIC;

  constructor(
    private menuService: MenuService
  ) {
  }

  public toggleNavbar(): void {
    this.menuService.toggleMenu(this.menuID);
    // ToDo: move code into themes/gi folder?
    // for GI: open 'browse_global'-section if menu is opened on mobile screens (xs, sm)
    // if (this.menuService.isMenuVisible(this.menuID)) {
      this.menuService.activateSection(this.menuID, 'browse_global');
    // }
    // else {
    //  this.menuService.deactivateSection(this.menuID, 'browse_global');
    // }
    // end GI second menu level toggle
  }
}
