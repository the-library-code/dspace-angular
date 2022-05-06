import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
import {map} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Injectable(
  {providedIn: 'root'}
)

export class GiDataService implements OnDestroy {

  req: Subscription;
  uiConfig = [];

  constructor(private http: HttpClient) {
     this.req = this.http
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
      ).subscribe(results => {

         // simulate sluggish internet connection
         // setTimeout( () => { this.uiConfig.push(... results); } , 10000);

         this.uiConfig.push(... results);
       });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
