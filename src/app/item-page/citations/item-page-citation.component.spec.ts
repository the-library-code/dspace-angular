import { ItemPageCitationComponent } from './item-page-citation.component';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Item } from '../../core/shared/item.model';
import { createSuccessfulRemoteDataObject, createSuccessfulRemoteDataObject$ } from '../../shared/remote-data.utils';
import { createPaginatedList } from '../../shared/testing/utils.test';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderMock } from '../../shared/mocks/translate-loader.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { OrcidPageComponent } from '../orcid-page/orcid-page.component';
import { ActivatedRoute } from '@angular/router';
import { OrcidAuthService } from '../../core/orcid/orcid-auth.service';
import { AuthService } from '../../core/auth/auth.service';
import { ItemDataService } from '../../core/data/item-data.service';
import { ChangeDetectionStrategy, NO_ERRORS_SCHEMA, PLATFORM_ID, SecurityContext } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RemoteData } from '../../core/data/remote-data';
import { CitationList } from '../../core/citation/citation-list.model';
import { Citation } from '../../core/citation/citation.model';
import { HALLink } from '../../core/shared/hal-link.model';
import { CitationDataService } from '../../core/data/citation-data.service';
import { By, DomSanitizer } from '@angular/platform-browser';
import { PublicationComponent } from '../simple/item-types/publication/publication.component';
import { take } from 'rxjs/operators';
import { MockProvider } from 'ng-mocks';
import { AdminSidebarComponent } from '../../admin/admin-sidebar/admin-sidebar.component';

// Test description
describe('ItemPageCitationComponent spec tests', () => {
  let comp: ItemPageCitationComponent;
  let fixture: ComponentFixture<ItemPageCitationComponent>;
  let routeData: any;

  // Create mock item
  const mockItem: Item = Object.assign(new Item(), {
    id: 'test-id',
    bundles: createSuccessfulRemoteDataObject$(createPaginatedList([])),
    metadata: {
      'dc.title': [
        {
          language: 'en_US',
          value: 'test item'
        }
      ]
    }
  });

  // Mock list of citations
  const mockCitations: Citation[] = [ {
    "html": "",
    "_links": null,
    "type" : Citation.type,
    "citationType" : "CSL",
    "style" : "iso690-author-date-de",
    "text" : "<div class=\"csl-bib-body\">\n  <div class=\"csl-entry\">Shepherd, Kim, [kein Datum]. <span style=\"font-style: italic\">{title} with fancy=+characters/\\/</span> [online]. Verf&uuml;gbar unter: http://localhost:4000/handle/123456789/3</div>\n</div>"
  }, {
    "html": "",
    "_links": null,
    "type" : Citation.type,
    "citationType" : "CSL",
    "style" : "ieee",
    "text" : "<div class=\"csl-bib-body\">\n  <div class=\"csl-entry\">\n    <div class=\"csl-left-margin\">[1]</div><div class=\"csl-right-inline\">K. Shepherd, &ldquo;{title} with fancy=+characters/\\/,&rdquo; [Online Video]. Available: http://localhost:4000/handle/123456789/3</div>\n  </div>\n</div>"
  }, {
    "html": "",
    "_links": null,
    "type" : Citation.type,
    "citationType" : "CSL",
    "style" : "elsevier-harvard",
    "text" : "<div class=\"csl-bib-body\">\n  <div class=\"csl-entry\">Shepherd, K., n.d. {title} with fancy=+characters/\\/ [WWW Document].</div>\n</div>"
  }, {
    "html": "",
    "_links": null,
    "type" : Citation.type,
    "citationType" : "CSL",
    "style" : "apa",
    "text" : "<div class=\"csl-bib-body\">\n  <div class=\"csl-entry\">Shepherd, K. (n.d.). <span style=\"font-style: italic\">{title} with fancy=+characters/\\/</span>. http://localhost:4000/handle/123456789/3</div>\n</div>"
  }, {
    "html": "",
    "_links": null,
    "type" : Citation.type,
    "citationType" : "CSL",
    "style" : "apa-6th-edition",
    "text" : "<div class=\"csl-bib-body\">\n  <div class=\"csl-entry\">Shepherd, K. (n.d.). {Title} with Fancy=+characters/\\/. Retrieved from http://localhost:4000/handle/123456789/3</div>\n</div>"
  } ];

  // Create a mock citation data service with getCitations$ method
  const mockCitationDataService = {
    getCitations$(item: Item): Observable<RemoteData<CitationList>> {
      let citationList = new CitationList();
      citationList.citations = mockCitations;
      return createSuccessfulRemoteDataObject$(citationList);
    }
  }

  // Before each test, set up test module and compile the component
  beforeEach(waitForAsync(() => {

    void TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLoaderMock
          }
        }),
        RouterTestingModule.withRoutes([])
      ],
      declarations: [ItemPageCitationComponent],
      providers: [
        { provide: CitationDataService, useValue: mockCitationDataService },
        { provide: DomSanitizer, useValue: {
            sanitize: (ctx: any, val: string) => val,
            bypassSecurityTrustHtml: (val: string) => val,
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).overrideComponent(ItemPageCitationComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.OnPush,
      }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPageCitationComponent);
    comp = fixture.componentInstance;
    comp.item = mockItem;
    fixture.detectChanges();
  });

  // Test expected elements and default citation on first load
  describe('item citation comonent after initial load', () => {
    it('should contain a select element to change style', () => {
      const selectDropdown = fixture.debugElement.queryAll(By.css('.item-citation-selector'));
      expect(selectDropdown.length).toBeGreaterThanOrEqual(1);
    });
    it('expect citations to be defined', () => {
      expect(comp.citations$).toBeDefined();
    })
    it('should contain the first citation in list by default, before any change() event', () => {
      waitForAsync(() => {
        comp.citation$.pipe(
          take(1)
        ).subscribe((citation: Citation) => {
          expect(citation.text).toEqual(mockCitations[0].text);
        });
      });
    });
  });

  // Test elements after the updateCitation method is called
  describe('item citation comonent after change event', () => {
    beforeEach(() => {
      comp.updateCitation('apa');
    });
    it('expect citations to be defined', () => {
      expect(comp.citations$).toBeDefined();
    })
    it('should contain the 4th (apa) citation in list by default, before any change() event', () => {
      waitForAsync(() => {
        comp.citation$.pipe(
          take(1)
        ).subscribe((citation: Citation) => {
          expect(citation.text).toEqual(mockCitations[3].text);
        })
      });
    });
  });

});
