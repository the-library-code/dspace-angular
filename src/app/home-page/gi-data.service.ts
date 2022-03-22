import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHomepageData } from './homepage-data-interface';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  constructor(private http: HttpClient) {
  }

  collectionsURL = 'http://localhost:8080/server/api/core/collections';
  communitiesURL = 'http://localhost:8080/server/api/core/communities';
  uiURL = 'http://localhost:8080/server/api/UIconfig';


  getLectureNotes(): Observable<IHomepageData[]> {
    return this.http.get<IHomepageData[]>(this.collectionsURL);
  }

  getFields() {
    return this.http.get(this.communitiesURL);
  }

  getUI(): Observable<IHomepageData[]> {
    return this.http.get<IHomepageData[]>(this.uiURL);
  }



}
