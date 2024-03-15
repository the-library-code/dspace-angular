import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { PageInfo } from 'src/app/core/shared/page-info.model';
import { Observable } from 'rxjs';
import { RemoteData } from 'src/app/core/data/remote-data';
import { PaginatedList } from 'src/app/core/data/paginated-list.model';
import { ExternalSourceDataService } from './external-source-data.service';
import { GndExternalSourceResponse, GndEntry } from '../submission/models/gnd-entry.model';
import { gndResponseMock } from './mock-data/gnd-entries-mock-data';



@Injectable({
  providedIn: 'root'
})
export class GndService {

  constructor(private externalService: ExternalSourceDataService) {
  }

  getGndExternalSourceUrl(externalSourceId: string) {
    return this.externalService.getEntriesEndpoint(externalSourceId);
  }


  getGndEntreiesByValue(value: string, start: number, importAs: string): Observable<RemoteData<PaginatedList<GndEntry>>> {

    return null;
    // change the code here

    // return this.findVocabularyById(vocabularyOptions.name, true, true, followLink('entries', { findListOptions: options, shouldEmbed: false })).pipe(
    //   getFirstSucceededRemoteDataPayload(),
    //   switchMap((vocabulary: Vocabulary) => vocabulary.entries),
    // );

  }

  getMockExternalSourceData(): GndExternalSourceResponse {
    return gndResponseMock;
  }
}