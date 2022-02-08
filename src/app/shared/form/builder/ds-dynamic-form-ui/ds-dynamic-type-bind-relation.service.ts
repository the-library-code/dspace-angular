import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import {
  AND_OPERATOR,
  DYNAMIC_MATCHERS,
  DynamicFormControlCondition,
  DynamicFormControlMatcher,
  DynamicFormControlModel,
  DynamicFormControlRelation,
  DynamicFormRelationService,
  OR_OPERATOR
} from '@ng-dynamic-forms/core';

import { isNotUndefined, isUndefined } from '../../../empty.util';
import { FormBuilderService } from '../form-builder.service';
import { FormFieldMetadataValueObject } from '../models/form-field-metadata-value.model';
import { DYNAMIC_FORM_CONTROL_TYPE_RELATION_GROUP } from './ds-dynamic-form-constants';

@Injectable()
export class DsDynamicTypeBindRelationService {

  constructor(@Optional() @Inject(DYNAMIC_MATCHERS) private dynamicMatchers: DynamicFormControlMatcher[],
              protected dynamicFormRelationService: DynamicFormRelationService,
              protected formBuilderService: FormBuilderService,
              protected injector: Injector) {

  }

  /**
   * Return the string value of the type bind model
   * TODO TLC-254 note - in DSpace-CRIS this is not a static method, changed here based on TSLint report
   * @param bindModelValue
   * @private
   */
  private static getTypeBindValue(bindModelValue: string | FormFieldMetadataValueObject): string {
    let value;
    if (isUndefined(bindModelValue) || typeof bindModelValue === 'string') {
      value = bindModelValue;
    } else if (bindModelValue.hasAuthority()) {
      value = bindModelValue.authority;
    } else {
      value = bindModelValue.value;
    }

    return value;
  }

  public getRelatedFormModel(model: DynamicFormControlModel): DynamicFormControlModel[] {

    const models: DynamicFormControlModel[] = [];

    (model as any).typeBindRelations.forEach((relGroup) => relGroup.when.forEach((rel) => {

      if (model.id === rel.id) {
        throw new Error(`FormControl ${model.id} cannot depend on itself`);
      }

      const bindModel: DynamicFormControlModel = this.formBuilderService.getTypeBindModel();

      if (model && !models.some((modelElement) => modelElement === bindModel)) {
        models.push(bindModel);
      }
    }));

    return models;
  }

  /**
   * Return true if the type bind relation (eg. {MATCH_VISIBLE, OR, ['book', 'book part']}) matches the value in
   * matcher.match (or matcher.opposingMatch? not sure what that is), which in this case would be the current dc.type
   * of the submission item
   * @param relation type bind relation (eg. {MATCH_VISIBLE, OR, ['book', 'book part']})
   * @param matcher contains 'match' value and an onChange() event listener
   */
  public matchesCondition(relation: DynamicFormControlRelation, matcher: DynamicFormControlMatcher): boolean {

    // Default to OR for operator (OR is explicitly set in field-parser.ts anyway)
    const operator = relation.operator || OR_OPERATOR;


    return relation.when.reduce((hasAlreadyMatched: boolean, condition: DynamicFormControlCondition, index: number) => {
      // Get the DynamicFormControlModel (typeBindModel) from the form builder service, set in the form builder
      // in the form model at init time in formBuilderService.modelFromConfiguration (called by other form components
      // like relation group component and submission section form component).
      // This model (DynamicRelationGroupModel) contains eg. mandatory field, formConfiguration, relationFields,
      // submission scope, form/section type and other high level properties
      const bindModel: any = this.formBuilderService.getTypeBindModel();

      let values: string[];
      let bindModelValue = bindModel.value;

      // If the form type is RELATION, map values to the mandatory field for the model? Don't totally understand
      // what is going on here
      if (bindModel.type === DYNAMIC_FORM_CONTROL_TYPE_RELATION_GROUP) {
        bindModelValue = bindModel.value.map((entry) => entry[bindModel.mandatoryField]);
      }
      // If we have an array of values, map the bindModelValue[] back to values[], looking up
      // the type bind value for each in the static method here (this just handles cases where authority should
      // be used, or where the entry doesn't have .value but is a string itself, etc)
      // If values isn't an array, make it a single element array with the looked-up type bind value.
      if (Array.isArray(bindModelValue)) {
        values = [...bindModelValue.map((entry) => DsDynamicTypeBindRelationService.getTypeBindValue(entry))];
      } else {
        values = [DsDynamicTypeBindRelationService.getTypeBindValue(bindModelValue)];
      }

      // If bind model evaluates to 'true' (is not undefined, is not null, is not false etc,
      // AND the relation match (type bind) is equal to the matcher match (item publication type), then the return
      // value is initialised as false. I'm not sure why the negation is used here!
      // Perhaps as a fail-safe for a bad mind model but an exact match of the strings in relation and matcher
      // passed to this method.
      let returnValue = (!(bindModel && relation.match === matcher.match));

      // Iterate the type bind values parsed and mapped from our form/relation group model
      for (const value of values) {
        if (bindModel && relation.match === matcher.match) {
          // If we're not at the first array element, and we're using the AND operator, and we have not
          // yet matched anything, return false. This is just a kind of short-hand put in here for some kind of
          // optimisation, I guess, since the AND requires all values to match, and if we're on index > 0 but haven't
          // matched then we've already failed. But surely it's simpler and just as optimal to break on the first
          // non-match if using the AND operator?!
          // In the case of default type bind usage, we always use OR anyway.
          if (index > 0 && operator === AND_OPERATOR && !hasAlreadyMatched) {
            return false;
          }
          // If we're not at the first array element, and we're using the OR operator (almost always the case)
          // and we've already matched then there is no need to continue, just return true.
          if (index > 0 && operator === OR_OPERATOR && hasAlreadyMatched) {
            return true;
          }

          // Do the actual match. Does condition.value (the item publication type) match the field model
          // type bind currently being inspected?
          returnValue = condition.value === value;

          // If return value is already true, break.
          if (returnValue) {
            break;
          }
        }

        // Here we have tests using 'opposingMatch' which I'm not certain about yet
        // It looks like a negation of sorts? Or a 'not equals' comparison used in combination I think?
        if (bindModel && relation.match === matcher.opposingMatch) {
          // If we're not at the first element, using AND, and already matched, just return true here
          if (index > 0 && operator === AND_OPERATOR && hasAlreadyMatched) {
            return true;
          }

          // If we're not at the first element, using OR, and we have NOT already matched, return false
          if (index > 0 && operator === OR_OPERATOR && !hasAlreadyMatched) {
            return false;
          }

          // Negated comparison
          returnValue = !(condition.value === value);

          // Break if already false
          if (!returnValue) {
            break;
          }
        }
      }
      return returnValue;
    }, false);
  }

  /**
   * Return an array of subscriptions to a calling component
   * @param model
   * @param control
   */
  subscribeRelations(model: DynamicFormControlModel, control: FormControl): Subscription[] {

    const relatedModels = this.getRelatedFormModel(model);
    const subscriptions: Subscription[] = [];

    Object.values(relatedModels).forEach((relatedModel: any) => {

      if (isNotUndefined(relatedModel)) {
        const initValue = (isUndefined(relatedModel.value) || typeof relatedModel.value === 'string') ? relatedModel.value :
          (Array.isArray(relatedModel.value) ? relatedModel.value : relatedModel.value.value);

        const valueChanges = relatedModel.valueChanges.pipe(
          startWith(initValue)
        );

        // Build up the subscriptions to watch for changes;
        // I still don't fully understand what is happening here, or the triggers in various form usage that
        // cause which / what to fire change events, why the matcher has onChange() instead of a field value or
        // form model, etc.
        subscriptions.push(valueChanges.subscribe(() => {
          // Iterate each matcher
          this.dynamicMatchers.forEach((matcher) => {

            // Find the relation
            const relation = this.dynamicFormRelationService.findRelationByMatcher((model as any).typeBindRelations, matcher);

            // If the relation is defined, get matchesCondition result and pass it to the onChange event listener
            if (relation !== undefined) {
              const hasMatch = this.matchesCondition(relation, matcher);
              matcher.onChange(hasMatch, model, control, this.injector);
            }
          });
        }));
      }
    });

    return subscriptions;
  }
}
