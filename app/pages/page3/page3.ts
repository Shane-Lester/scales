import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScaleDetailPage} from '../scale-detail/scale-detail';
import {DataService} from '../../providers/data-service/data-service';

@Component({
  templateUrl: 'build/pages/page3/page3.html',
  providers:[DataService]
})

export class Page3 {
  scales: Array<any>;
  constructor(private nav: NavController, dataService: DataService) {
    this.nav = nav;
    this.scales = dataService.getData();
  }
  showScale(event, scale, index) {
    // console.log(scale);
      this.nav.push(ScaleDetailPage, { scale: scale, scaleIndex: index, ScalePage: this });
    }
  }
