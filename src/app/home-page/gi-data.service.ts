import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService {
  constructor(private http: HttpClient) {
  }

  getUI() {
    return this.http
      .get('http://localhost:8080/server/api/GI/UIConfig')
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key]});
            }
          }
          return postsArray;
        })
      );
  }
}
