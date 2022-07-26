import {Observable, of as observableOf, Subscription} from 'rxjs';

import {filter, map} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {RouterReducerState} from '@ngrx/router-store';
import {select, Store} from '@ngrx/store';

import {fadeInOut, fadeOut} from '../../../../../app/shared/animations/fade';
import {HostWindowService} from '../../../../../app/shared/host-window.service';
import {AppState, routerStateSelector} from '../../../../../app/app.reducer';
import {isNotUndefined} from '../../../../../app/shared/empty.util';
import {isAuthenticated, isAuthenticationLoading} from '../../../../../app/core/auth/selectors';
import {EPerson} from '../../../../../app/core/eperson/models/eperson.model';
import {AuthService, LOGIN_ROUTE, LOGOUT_ROUTE} from '../../../../../app/core/auth/auth.service';
import {listableObjectComponent} from '../../../../../app/shared/object-collection/shared/listable-object/listable-object.decorator';
import {ViewMode} from '../../../../../app/core/shared/view-mode.model';
import {Context} from '../../../../../app/core/shared/context.model';

// ToDo selector name is not consistent with class name.
@Component({
  selector: 'ds-auth-nav-menu-ges-info',
  templateUrl: './auth-nav-menu.component.html',
  styleUrls: ['./auth-nav-menu.component.scss'],
  animations: [fadeInOut, fadeOut]
})

@listableObjectComponent('Project', ViewMode.StandalonePage, Context.Any, 'gi')

export class AuthNavMenuComponent implements OnInit {
  /**
   * Whether user is authenticated.
   * @type {Observable<string>}
   */
  public isAuthenticated: Observable<boolean>;

  /**
   * True if the authentication is loading.
   * @type {boolean}
   */
  public loading: Observable<boolean>;

  public isXsOrSm$: Observable<boolean>;

  public showAuth = observableOf(false);

  public user: Observable<EPerson>;

  public sub: Subscription;

  constructor(private store: Store<AppState>,
              private windowService: HostWindowService,
              private authService: AuthService
  ) {
    this.isXsOrSm$ = this.windowService.isXsOrSm();
  }

  ngOnInit(): void {
    // set isAuthenticated
    this.isAuthenticated = this.store.pipe(select(isAuthenticated));

    // set loading
    this.loading = this.store.pipe(select(isAuthenticationLoading));

    this.user = this.authService.getAuthenticatedUserFromStore();

    this.showAuth = this.store.pipe(
      select(routerStateSelector),
      filter((router: RouterReducerState) => isNotUndefined(router) && isNotUndefined(router.state)),
      map((router: RouterReducerState) => (!router.state.url.startsWith(LOGIN_ROUTE)
        && !router.state.url.startsWith(LOGOUT_ROUTE))
      )
    );
  }
}
