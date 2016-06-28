import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ScaleDetailPage} from '../scale-detail/scale-detail';
import {DataService} from '../../providers/data-service/data-service';

@Component({
  templateUrl: 'build/pages/detail/detail.html',
  providers:[DataService]

})
export class DetailPage {
  item;
  iabRef;
  scale;
  scales;
  constructor(public nav: NavController, public navParams: NavParams, dataService: DataService) {
    this.nav = nav;
    this.navParams = navParams;
    this.item = this.navParams.get('item');
    this.scales = dataService.getData();
    // console.log(this.scales);
    this.scales.forEach((item)=>{
      if (item.description =="ECG"){
        this.scale = item;
        // console.log(this.scale);
      }
    });
  }

  launch(link){
    // console.log(link);
    if (link == "ECG"){
      // console.log('ECG link');
      // console.log(this.scale);

      this.nav.push(ScaleDetailPage,{scale:this.scale});
      return;
    }
    window.open(link, '_blank', 'location=yes');
  }
}
