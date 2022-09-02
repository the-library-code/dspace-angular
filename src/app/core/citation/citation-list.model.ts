import { typedObject } from '../cache/builders/build-decorators';
import { CITATION_LIST } from './citation-list.resource-type';
import { excludeFromEquals } from '../utilities/equals.decorators';
import { autoserialize, deserialize, deserializeAs } from 'cerialize';
import { ResourceType } from '../shared/resource-type';
import { HALResource } from '../shared/hal-resource.model';
import { HALLink } from '../shared/hal-link.model';
import { CacheableObject } from '../cache/cacheable-object.model';
import { SafeHtml, SafeStyle } from '@angular/platform-browser';
import { Citation } from './citation.model';

@typedObject
export class CitationList implements CacheableObject {

  static type = CITATION_LIST;

  /**
   * The object type
   */
  @excludeFromEquals
  @autoserialize
  type: ResourceType;

  @autoserialize
  citations: Citation[]

  @deserialize
  _links: {
    self: HALLink,
  };

}
