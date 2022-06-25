import { AuthorsWithMostDocsComponent } from './app/home-page/authors-with-most-docs/authors-with-most-docs.component';
import { FrequentDownloadsComponent } from './app/home-page/frequent-downloads/frequent-downloads.component';
import { PopularDocsComponent } from './app/home-page/popular-docs/popular-docs.component';
import { NewestCollectionsComponent } from './app/home-page/newest-collections/newest-collections.component';
import { NewCollectionComponent } from './app/home-page/newest-collections/new-collection/new-collection.component';
import { GiFieldsComponent } from './app/home-page/gi-fields/gi-fields.component';
import { FieldComponent } from './app/home-page/gi-fields/field/field.component';

import { GiMagazinesComponent } from './app/home-page/gi-magazines/gi-magazines.component';
import { MagazineComponent } from './app/home-page/gi-magazines/magazine/magazine.component';

import { LectureNotesComponent } from './app/home-page/lecture-notes/lecture-notes.component';
import { LectureNoteComponent } from './app/home-page/lecture-notes/lecture-note/lecture-note.component';

import { GiSearchNavbarComponent } from './app/gi-search-navbar/gi-search-navbar.component';
import { GiLanguageSwitcherComponent } from './app/shared/gi-language-switcher/gi-language-switcher.component';

export const EXCLUSIVE_COMPONENTS = [
  NewCollectionComponent,
  NewestCollectionsComponent,
  AuthorsWithMostDocsComponent,
  FrequentDownloadsComponent,
  PopularDocsComponent,
  LectureNoteComponent,
  MagazineComponent,
  FieldComponent,
  GiFieldsComponent,
  GiMagazinesComponent,
  LectureNotesComponent,
  GiSearchNavbarComponent,
  GiLanguageSwitcherComponent,

];
