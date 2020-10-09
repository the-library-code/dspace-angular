import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { catchError, map, switchMap, withLatestFrom, tap } from 'rxjs/operators';
import { of as observableOf } from 'rxjs';
import {
  AddTopicsAction,
  OpenaireBrokerTopicActionTypes,
  RetrieveAllTopicsAction,
  RetrieveAllTopicsErrorAction,
} from './openaire-broker-topic.actions';

import { OpenaireBrokerTopicObject } from '../../core/openaire/models/openaire-broker-topic.model';
import { PaginatedList } from '../../core/data/paginated-list';
import { OpenaireBrokerTopicsService } from './openaire-broker-topic.service';
import { OpenaireState } from '../openaire.reducer';
import { NotificationsService } from '../../shared/notifications/notifications.service';

/**
 * Provides effect methods for the OpenAIRE Broker topics actions.
 */
@Injectable()
export class OpenaireBrokerTopicEffects {

  /**
   * Retrieve all OpenAIRE Broker topics managing pagination and errors.
   */
  @Effect() retrieveAllTopics$ = this.actions$.pipe(
    ofType(OpenaireBrokerTopicActionTypes.RETRIEVE_ALL_TOPICS),
    withLatestFrom(this.store$),
    switchMap(([action, currentState]: [RetrieveAllTopicsAction, any]) => {
      return this.openaireBrokerTopicService.getTopics(
        action.payload.elementsPerPage,
        action.payload.currentPage
      ).pipe(
        map((topics: PaginatedList<OpenaireBrokerTopicObject>) =>
          new AddTopicsAction(topics.page, topics.totalPages, topics.currentPage, topics.totalElements)
        ),
        catchError((error: Error) => {
          if (error) {
            console.error(error.message);
          }
          return observableOf(new RetrieveAllTopicsErrorAction())
        })
      )
    })
  );

  /**
   * Show a notification on error.
   */
  @Effect({ dispatch: false }) retrieveAllTopicsErrorAction$ = this.actions$.pipe(
    ofType(OpenaireBrokerTopicActionTypes.RETRIEVE_ALL_TOPICS_ERROR),
    tap(() => {
      this.notificationsService.error(null, this.translate.get('openaire.broker.topic.error.service.retrieve'))
    })
  );

  /**
   * Initialize the effect class variables.
   * @param {Actions} actions$
   * @param {Store<any>} store$
   * @param {TranslateService} translate
   * @param {NotificationsService} notificationsService
   * @param {OpenaireBrokerTopicsService} openaireBrokerTopicService
   */
  constructor(
    private actions$: Actions,
    private store$: Store<any>,
    private translate: TranslateService,
    private notificationsService: NotificationsService,
    private openaireBrokerTopicService: OpenaireBrokerTopicsService
  ) { }
}
