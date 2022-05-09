import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {

  req: Observable<any>;

  constructor(private http: HttpClient) {
    this.req = this.http
      .get('http://localhost:8080/server/api/GI/UIConfig');

    // alternatively:
    // .get('http://localhost:8080/server/api/GI/UIConfig').pipe(shareReplay());
  }

   getConfig() {
     return this.req; }
}
