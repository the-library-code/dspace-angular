import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  constructor(private http: HttpClient) {
  }

  collectionsURL = 'http://localhost:8080/server/api/core/collections';
  communitiesURL = 'http://localhost:8080/server/api/core/communities';
  uiURL = 'http://localhost:8080/server/api/UIconfig';


  getLectureNotes() {
    return this.http.get(this.collectionsURL);
  }

  getFields() {
    return this.http.get(this.communitiesURL);
  }

  getUI() {
    return this.http.get(this.uiURL);
  }



}
