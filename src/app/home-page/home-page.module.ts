import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './home-page.component';
import { TopLevelCommunityListComponent } from './top-level-community-list/top-level-community-list.component';
import { StatisticsModule } from '../statistics/statistics.module';
import { ThemedHomeNewsComponent } from './home-news/themed-home-news.component';
import { ThemedHomePageComponent } from './themed-home-page.component';
import { NewestCollectionComponent } from './newest-collection/newest-collection.component';
import { AuthorsWithMostDocsComponent } from './authors-with-most-docs/authors-with-most-docs.component';
import { PopularDocsComponent } from './popular-docs/popular-docs.component';
import { FrequentDownloadsComponent } from './frequent-downloads/frequent-downloads.component';
import { GiFieldsComponent } from './gi-fields/gi-fields.component';
import { GiMagazinesComponent } from './gi-magazines/gi-magazines.component';
import { LectureNotesComponent } from './lecture-notes/lecture-notes.component';

const DECLARATIONS = [
  HomePageComponent,
  ThemedHomePageComponent,
  TopLevelCommunityListComponent,
  ThemedHomeNewsComponent,
  HomeNewsComponent,
  NewestCollectionComponent,
  AuthorsWithMostDocsComponent,
  PopularDocsComponent,
  FrequentDownloadsComponent,
  GiFieldsComponent,
  GiMagazinesComponent,
  LectureNotesComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomePageRoutingModule,
    StatisticsModule.forRoot()
  ],
  declarations: [
    ...DECLARATIONS,
  ],
  exports: [
    ...DECLARATIONS,
  ],
})
export class HomePageModule {

}
