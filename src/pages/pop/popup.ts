import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { HomePage } from '../../pages/home/home';
import { SrvGeneral } from '../../providers/srvGeneral'
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
  providers:[ SrvGeneral ]
})

export class PopupPage {

  constructor(
  private navCtrl: NavController, 
  private translate: TranslateService,
  private alertCtrl:AlertController,
  private srvGeneral:SrvGeneral ) {

    this.showAlert();
  }

  

  public showAlert= () :void =>{
    this.srvGeneral.setMessage(this.translate.instant("msg.conditionUtilisation"));
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage );
   }

}