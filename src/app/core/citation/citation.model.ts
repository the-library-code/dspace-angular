import { typedObject } from '../cache/builders/build-decorators';
import { CITATION } from './citation.resource-type';
import { excludeFromEquals } from '../utilities/equals.decorators';
import { autoserialize, deserialize } from 'cerialize';
import { ResourceType } from '../shared/resource-type';
import { HALLink } from '../shared/hal-link.model';
import { CacheableObject } from '../cache/cacheable-object.model';
import { SafeHtml } from '@angular/platform-browser';

@typedObject
export class Citation implements CacheableObject {

  static type = CITATION;

  /**
   * The object type
   */
  @excludeFromEquals
  @autoserialize
  type: ResourceType;

  /**
   * The citation type (eg. CSL, LateX)
   */
  @autoserialize
  citationType: string;

  /**
   * The citation style (eg. apa)
   */
  @autoserialize
  style: string;

  /**
   * The citation text, eg. the actual HTML output from a CSL processor
   */
  @autoserialize
  text: string;

  /**
   * We don't serialize this - it is where we keep sanitized CSL HTML
   */
  html: SafeHtml

  @deserialize
  _links: {
    self: HALLink,
  };

}
