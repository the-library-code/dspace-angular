import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {merge, Observable} from 'rxjs';
import {reduce} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
import { RESTURLCombiner } from '../../../../app/core/url-combiner/rest-url-combiner';
// import {HALEndpointService} from '../core/shared/hal-endpoint.service';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  uiConfigreq;
  latestCollection;
  searchPlaceholder;
  private readonly restUrl;

  constructor(private http: HttpClient, private translate: TranslateService
              // , private halService: HALEndpointService
  ) {

    // Get root URL of configured REST API, code copied from src/app/core/xsrf/xsrf.interceptor.ts
    this.restUrl = new RESTURLCombiner('/').toString().toLowerCase();

    this.getUiConfig();
    this.getLatestCollections();
    this.getSearchPlaceholder();
    }

  getUiConfig() {
    this.uiConfigreq =
     //  this.halService.getEndpoint('/GI/UIConfig');
      this.http.get(this.restUrl + '/gi/uiconfig');
  }

  getLatestCollections() {
    this.latestCollection = this.http
      .get(this.restUrl + '/gi/latestcollections');
  }

  getReq(url: string): Observable<any> {
   return this.http
      .get(url);
  }

  getNumberofItemsReq(uuid: any): Observable<any> {
    return this.http
      .get(this.restUrl + '/gi/numberofitems/' + uuid);
  }

  getSearchPlaceholder() {
    const o1: Observable<any> = this.http.get(this.restUrl + '/discover/search/objects');
    const o2: Observable<any> = this.translate.get('gi.search.placeholder');
    this.searchPlaceholder = merge(o1, o2).pipe(reduce((a, b) => a.replace('$$',
      b?._embedded.searchResult?.page.totalElements)));
  }

}
