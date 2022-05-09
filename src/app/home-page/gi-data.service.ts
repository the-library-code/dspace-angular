import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  req;

  constructor(private http: HttpClient) {
    this.req = this.http
      .get('http://localhost:8080/server/api/GI/UIConfig');
    }
}
