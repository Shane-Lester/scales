import {Component} from '@angular/core'
import {AboutPage} from '../about-page/about-page';
import {Page3} from '../page3/page3';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = Page3;
    this.tab2Root = AboutPage;
  }
}
