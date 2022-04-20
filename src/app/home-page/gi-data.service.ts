import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  constructor(private http: HttpClient) {
  }

  uiURL = 'http://localhost:8080/server/api/GI/UIConfig';

  getUI() {
    return this.http.get(this.uiURL);
  }



}
