import { NgModule } from '@angular/core';
import { EXCLUSIVE_COMPONENTS as GI} from './gi/exclusive-components';

export const EXCLUSIVE_COMPONENTS = [
//   ...CUSTOM,
  ...GI,
];


/**
 * This module only serves to ensure themed entry components are discoverable. It's kept separate
 * from the theme modules to ensure only the minimal number of theme components is loaded ahead of
 * time
 */
@NgModule()
export class ThemedExclusiveComponentModule {
  static withExclusiveComponents() {
    return {
      ngModule: ThemedExclusiveComponentModule,
      providers: EXCLUSIVE_COMPONENTS.map((component) => ({provide: component}))
    };
  }

}
