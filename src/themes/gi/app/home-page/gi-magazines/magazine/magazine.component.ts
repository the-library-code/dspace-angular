import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GiDataService } from '../../../shared/gi-data.service';

@Component({
  selector: 'ds-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['../../../../styles/homepage-box_with-thumbnail.scss',
             // './magazine.component.scss'
  ]
})
export class MagazineComponent implements OnInit, OnDestroy {

  @Input() magazines: any;
  numberOfItems;
  logoSub;
  numberSub;
  thumbnailUrl;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.magazines.uuid);

    // this subscription is direct, we have to manage it ourselves.
    this.logoSub = this.gidata.getReq(this.magazines._links.logo.href).subscribe(result => {
      this.thumbnailUrl = result._links.content.href;
      this.ref.markForCheck();});
  }

  ngOnDestroy() {
    this.logoSub.unsubscribe();
  }
}
