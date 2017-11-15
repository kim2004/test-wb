import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-information',
  templateUrl: 'information.html'
})
export class InformationPage { 

  constructor( 
    private navCtrl: NavController, 
    private translate: TranslateService ) {
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
