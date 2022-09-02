import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import {fadeInOut} from '../../shared/animations/fade';
import {Item} from '../../core/shared/item.model';
import {CitationDataService} from '../../core/data/citation-data.service';
import { Citation } from '../../core/citation/citation.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { getFirstCompletedRemoteData, getFirstSucceededRemoteDataPayload } from '../../core/shared/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { CitationList } from '../../core/citation/citation-list.model';
import { hasValue } from '../../shared/empty.util';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'ds-item-page-citation',
  styleUrls: ['./item-page-citation.component.scss'],
  templateUrl: './item-page-citation.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [fadeInOut],
})
export class ItemPageCitationComponent implements OnInit {

  // Item passed declaratively in item page template
  @Input() item: Item;

  label: string = "item.page.citation.heading";

  citations$: Observable<Citation[]>;
  citationMap$: Observable<Map<String, Citation>>;
  citation$: Observable<Citation>;

  constructor(private citationDataService: CitationDataService,
              private sanitizer: DomSanitizer,
              ) { }

  ngOnInit() {

    this.citationMap$ = this.citationDataService.getCitations$(this.item).pipe(
      getFirstSucceededRemoteDataPayload(),
      map((citationList: CitationList) => {
        let citationMap: Map<String, Citation> = new Map<String, Citation>();
        let first: Citation;
        citationList.citations.forEach((citation, index) => {
          let c = new Citation();
          c.citationType = citation.citationType;
          c.format = citation.format;
          // Allow the CSL inline styles to be applied. Ideally we'd use classes here! But it's in the citeproc code.
          c.html = this.sanitizer.bypassSecurityTrustHtml(citation.text)
          citationMap.set(c.format, c);
          if (index === 0) {
            first = c;
          }
        })
        this.citation$ = of(first);
        return citationMap;
      })
    );
  }

  /**
   * Handle a change format event in the selector
   * @param event
   */
  changeFormat(event) {
    let format = null;
    if (hasValue(event.target.value)) {
      format = event.target.value;
    }
    this.updateCitation(format);
  }

  /**
   * Render a citation for the given format
   * @param format
   */
  updateCitation(format) {
    this.citation$ = this.citationMap$.pipe(
      map((citationMap) => {
        if (citationMap.has(format)) {
          return citationMap.get(format);
        } else {
          return citationMap.values()[0];
        }
      })
    )
  }

  /**
   * Comparator to ensure that our keyvalue pipe if the citation map preserves the order they
   * were added to the map, instead of sorting alphabetically by key (default, since key is string)
   * @param a
   * @param b
   */
  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}
