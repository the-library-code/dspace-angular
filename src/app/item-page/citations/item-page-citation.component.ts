import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { fadeInOut } from '../../shared/animations/fade';
import { Item } from '../../core/shared/item.model';
import { CitationDataService } from '../../core/data/citation-data.service';
import { Citation } from '../../core/citation/citation.model';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { getFirstSucceededRemoteDataPayload } from '../../core/shared/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CitationList } from '../../core/citation/citation-list.model';
import { hasValue } from '../../shared/empty.util';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ds-item-page-citation',
  styleUrls: ['./item-page-citation.component.scss'],
  templateUrl: './item-page-citation.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  animations: [fadeInOut],
})
/**
 * Render an HTML citation and format selector for a given item.
 *
 * @author Kim Shepherd
 */
export class ItemPageCitationComponent implements OnInit {

  // Item passed declaratively in item page template
  @Input() item: Item;

  label: string = "item.page.citation.heading";
  // The default / current citation
  citation$: Observable<Citation>;
  // List of citations
  citations$: Observable<Citation[]>;

  html: SafeHtml = 'asdfasdf';

  constructor(private citationDataService: CitationDataService,
              private sanitizer: DomSanitizer,
              private translateService: TranslateService,
              ) { }

  /**
   * Initialise this component. Get the styles and citations, sanitize HTML. This map will be
   * asyncronously iterated in the dropdown selector beneat the citation.
   * At the first value, set a default for the citation$ observable since otherwise only the (change) event
   * triggers a draw.
   */
  ngOnInit() {
    this.citations$ = this.citationDataService.getCitations$(this.item).pipe(
      getFirstSucceededRemoteDataPayload(),
      map((citationList: CitationList) => {
        let citations: Citation[] = [];
        citationList.citations.forEach((citation, index) => {
          let c = new Citation();
          c.citationType = citation.citationType;
          c.style = citation.style;
          // Allow the CSL inline styles to be applied. Ideally we'd use classes here! But it's in the citeproc code.
          c.html = this.sanitizer.bypassSecurityTrustHtml(citation.text)
          citations.push(c);
        })
        if (citations.length > 0) {
          this.citation$ = of(citations[0]);
        }
        return citations;
      })
    );
  }

  /**
   * Handle a change style event in the selector
   * @param event
   */
  changeCitationStyle(event) {
    if (event && event.target && hasValue(event.target.value)) {
      this.updateCitation(event.target.value);
    }

  }

  /**
   * Render a citation for the given style
   * @param style
   */
  updateCitation(style) {
    this.citation$ = this.citations$.pipe(
      map((citations) => {
        let newCitation = null;
        citations.forEach((citation) => {
          console.dir(citation);
          if (citation.style === style) {
            newCitation = citation;
          }
        })
        return newCitation;
      })
    );
  }

}
