import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { GiDataService } from '../../../shared/gi-data.service';

@Component({
  selector: 'ds-new-collection',
  templateUrl: './new-collection.component.html',
  styleUrls: ['../../../../styles/homepage-box_with-thumbnail.scss',
              './new-collection.component.scss']
})
export class NewCollectionComponent implements OnInit, OnDestroy {


  @Input() newCollections: any;
  logoSub;
  numberSub;
  thumbnailUrl;

  constructor(private gidata: GiDataService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {

    // the subscription to this request is done within the html file and managed by angular.
    this.numberSub = this.gidata.getNumberofItemsReq(this.newCollections.uuid);

    // this subscription is direct, we have to manage it ourselves.
    this.logoSub = this.gidata.getReq(this.newCollections._links.logo.href).subscribe(result => {
      this.thumbnailUrl = result._links.content.href;
      this.ref.markForCheck();});
  }

  ngOnDestroy() {
    this.logoSub.unsubscribe();
  }

}
