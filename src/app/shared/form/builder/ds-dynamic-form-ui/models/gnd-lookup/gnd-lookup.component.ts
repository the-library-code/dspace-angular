import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'gnd-lookup',
  templateUrl: './gnd-lookup.component.html',
  styleUrls: ['./gnd-lookup.component.scss'],
})

export class GndLookupComponent {
  searchText = new FormControl('');

  constructor(
    private activeModal: NgbActiveModal) {}

    close(): void {
      this.activeModal.close();
    }

    searchGNDAuthority(){

    }
}
