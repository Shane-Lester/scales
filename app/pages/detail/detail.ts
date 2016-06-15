import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/detail/detail.html',
})
export class DetailPage {
  item;
  constructor(public nav: NavController, public navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;
    this.item = this.navParams.get('item');
  }
}
