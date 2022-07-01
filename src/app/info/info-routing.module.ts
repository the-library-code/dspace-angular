import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nBreadcrumbResolver } from '../core/breadcrumbs/i18n-breadcrumb.resolver';
import { PRIVACY_PATH, END_USER_AGREEMENT_PATH, FEEDBACK_PATH, IMPRINT_PATH } from './info-routing-paths';
import { ThemedEndUserAgreementComponent } from './end-user-agreement/themed-end-user-agreement.component';
import { ThemedPrivacyComponent } from './privacy/themed-privacy.component';
import { ThemedFeedbackComponent } from './feedback/themed-feedback.component';
import { FeedbackGuard } from '../core/feedback/feedback.guard';

// GI Specifics
import { ImprintComponent } from '../../themes/gi/app/info/imprint/imprint.component';
// End GI Specifics

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: END_USER_AGREEMENT_PATH,
        component: ThemedEndUserAgreementComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.end-user-agreement.title', breadcrumbKey: 'info.end-user-agreement' }
      }
    ]),
    RouterModule.forChild([
      {
        path: PRIVACY_PATH,
        component: ThemedPrivacyComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.privacy.title', breadcrumbKey: 'info.privacy' }
      }
    ]),
    RouterModule.forChild([
      {
        path: FEEDBACK_PATH,
        component: ThemedFeedbackComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.feedback.title', breadcrumbKey: 'info.feedback' },
        canActivate: [FeedbackGuard]
      },
    ]),

    // GI Specifics
    RouterModule.forChild([
      {
        path: IMPRINT_PATH,
        component: ImprintComponent,
        resolve: { breadcrumb: I18nBreadcrumbResolver },
        data: { title: 'info.imprint.title', breadcrumbKey: 'info.imprint' }
      }
    ]),
    // End GI Specifics
  ]
})
/**
 * Module for navigating to components within the info module
 */
export class InfoRoutingModule {
}
