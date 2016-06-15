import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DetailPage} from '../detail/detail';
import {Page3} from '../page3/page3';

@Component({
  templateUrl: 'build/pages/scale-detail/scale-detail.html',
})
export class ScaleDetailPage {
  scale;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.scale = this.navParams.get('scale');

  }
  itemDetail($event,item){
    this.nav.push(DetailPage,{item:item});
  }
}
