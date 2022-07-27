import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { BrowseByMetadataPageComponent as BaseComponent } from '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component';
import { BrowseByDataType, rendersBrowseBy } from '../../../../../app/browse-by/browse-by-switcher/browse-by-decorator';
import {Observable, Subscription} from 'rxjs';
import {RemoteData} from '../../../../../app/core/data/remote-data';
import {Bitstream} from '../../../../../app/core/shared/bitstream.model';
import {filter, map, mergeMap} from 'rxjs/operators';
import {Collection} from '../../../../../app/core/shared/collection.model';
import {hasValue} from '../../../../../app/shared/empty.util';
import {DSpaceObject} from '../../../../../app/core/shared/dspace-object.model';
import {Community} from '../../../../../app/core/shared/community.model';
import {getAllSucceededRemoteDataPayload} from '../../../../../app/core/shared/operators';
import {GiDataService} from '../../shared/gi-data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BrowseService} from '../../../../../app/core/browse/browse.service';
import {DSpaceObjectDataService} from '../../../../../app/core/data/dspace-object-data.service';
import {PaginationService} from '../../../../../app/core/pagination/pagination.service';

@Component({
  selector: 'ds-browse-by-metadata-page',
  styleUrls: ['./browse-by-metadata-page.component.scss'],
  // styleUrls: ['../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.scss'],
  templateUrl: './browse-by-metadata-page.component.html'
  // templateUrl: '../../../../../app/browse-by/browse-by-metadata-page/browse-by-metadata-page.component.html'
})

/**
 * Component for determining what Browse-By component to use depending on the metadata (browse ID) provided
 */

// @rendersBrowseBy(BrowseByDataType.Metadata)
export class BrowseByMetadataPageComponent extends BaseComponent implements OnInit {

  logoContentUrl;

  constructor(protected gidata: GiDataService,
              protected ref: ChangeDetectorRef,
              protected route: ActivatedRoute,
              protected browseService: BrowseService,
              protected dsoService: DSpaceObjectDataService,
              protected paginationService: PaginationService,
              protected router: Router) {
    super(route, browseService , dsoService, paginationService, router);
  }

  ngOnInit() {
    super.ngOnInit();
    this.initLogo();
  }


  initLogo(): void {

    // this subscription is direct, we have to manage it ourselves.
    // Subs are canceled on OnDestroy in Base Component method.

    let logoURL = '';

    this.subs.push(this.parent$.subscribe(
      (rd: any) => logoURL = rd.payload?._links.logo?.href ));

    this.subs.push( this.gidata.getReq(logoURL).subscribe(result => {
      this.logoContentUrl = result._links.content.href;
      this.ref.markForCheck();
    }));
  }


}
