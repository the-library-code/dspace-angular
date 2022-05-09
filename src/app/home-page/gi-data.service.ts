import {HttpClient} from '@angular/common/http';
import {Injectable, OnDestroy} from '@angular/core';
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
      .subscribe(results => {
        this.uiConfig.push(results);
       });
  }

  ngOnDestroy() {
    this.req.unsubscribe();
  }

}
