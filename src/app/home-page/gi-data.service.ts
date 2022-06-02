import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {merge, Observable} from 'rxjs';
import {reduce} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  uiConfigreq;
  latestCollection;
  searchPlaceholder;

  constructor(private http: HttpClient, private translate: TranslateService) {
    this.getUiConfig();
    this.getlatestCollections();
    this.getSearchPlaceholder();
    }

    getUiConfig() {
      this.uiConfigreq = this.http
       .get('http://localhost:8080/server/api/GI/UIConfig');
    }

  getlatestCollections() {
    this.latestCollection = this.http
      .get('http://localhost:8080/server/api/GI/latestCollections');
  }

  getReq(url: string): Observable<any> {
   return this.http
      .get(url);
  }

  getNumberofItemsReq(uuid: any): Observable<any> {
    return this.http
      .get('http://localhost:8080/server/api/GI/NumberOfItems/' + uuid);
  }

  getSearchPlaceholder() {
    const o1: Observable<any> = this.http.get('http://localhost:8080/server/api/GI/NumberOfItemsTop');
    const o2: Observable<any> = this.translate.get('gi.search.placeholder');
    this.searchPlaceholder = merge(o1, o2).pipe(reduce((a, b) => a.replace('$$', b)));
  }

}
