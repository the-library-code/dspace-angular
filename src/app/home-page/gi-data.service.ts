import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  req: Observable<any>;

  constructor(private http: HttpClient) {
    this.req = this.http
      .get('http://localhost:8080/server/api/GI/UIConfig'); }

 getConfig() {
   return this.req; }

}
