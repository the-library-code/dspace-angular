import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  uiConfigreq;

  constructor(private http: HttpClient) {
    this.uiConfigreq = this.http
      .get('http://localhost:8080/server/api/GI/UIConfig');
    }

  getReq(url: string): Observable<any> {
   return this.http
      .get(url);
  }

  getNumberofItemsReq(uuid: any): Observable<any> {
    return this.http
      .get('http://localhost:8080/server/api/GI/NumberOfItems/' + uuid);
  }
}
