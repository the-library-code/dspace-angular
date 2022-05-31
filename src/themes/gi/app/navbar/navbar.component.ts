import { Component } from '@angular/core';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';
import { Observable } from 'rxjs';
import { MenuID } from '../../../../app/shared/menu/initial-menus-state';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-gi-navbar',
  styleUrls: ['./navbar.component.scss'],
  // styleUrls: ['../../../../app/navbar/navbar.component.scss'],
  templateUrl: './navbar.component.html',
  // templateUrl: '../../../../app/navbar/navbar.component.html',
  animations: [slideMobileNav]
})
export class NavbarComponent extends BaseComponent {

  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;
  public showAuth = false;
  menuID = MenuID.PUBLIC;
  public toggleNavbar(): void {
    this.menuService.toggleMenu(this.menuID);
  }
}
