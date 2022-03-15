import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  constructor(private http: HttpClient) {
  }

  getLectureNotes() {
    return this.http.get('http://localhost:8080/server/api/core/collections');
  }

}
