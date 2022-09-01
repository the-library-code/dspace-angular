import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {fadeInOut} from '../../shared/animations/fade';
import {Item} from '../../core/shared/item.model';

@Component({
  selector: 'ds-item-page-citation',
  styleUrls: ['./item-page-citation.component.scss'],
  templateUrl: './item-page-citation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut]
})
export class ItemPageCitationComponent implements OnInit {

  // Item passed declaratively in item page template
  @Input() item: Item;

  label = "Citation"

  ngOnInit() {
  }

}
