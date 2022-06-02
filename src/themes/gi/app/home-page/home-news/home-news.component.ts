import {Component, OnInit} from '@angular/core';
import { HomeNewsComponent as BaseComponent } from '../../../../../app/home-page/home-news/home-news.component';
import {GiDataService} from '../../../../../app/home-page/gi-data.service';

@Component({
  selector: 'ds-home-news',
  styleUrls: ['./home-news.component.scss'],
  // styleUrls: ['../../../../../app/home-page/home-news/home-news.component.scss'],
  templateUrl: './home-news.component.html'
  // templateUrl: '../../../../../app/home-page/home-news/home-news.component.html'
})

/**
 * Component to render the news section on the home page
 */
export class HomeNewsComponent extends BaseComponent implements OnInit {

  searchPlaceholder;

  constructor(public gds: GiDataService ) {
    super();}

  ngOnInit() {
    this.searchPlaceholder = this.gds.searchPlaceholder;
  }

}

