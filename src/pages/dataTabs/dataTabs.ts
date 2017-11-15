import { Component } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { NavController, Tabs, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { IUser } from '../../models/user';

import { DataPage } from '../dataTabs/data/data';
import { HomePage } from '../../pages/home/home';
import { SrvHttp } from '../../providers/srvHttp';
import { SrvData } from '../../providers/srvData';
import { SrvGeneral } from '../../providers/srvGeneral';
import { AddDataPage } from '../dataTabs/addData/addData';
import { SendDataPage } from '../dataTabs/sendData/sendData';

 
@Component({
  templateUrl: 'dataTabs.html',
  providers: [ SrvGeneral, Tabs, DataPage, SendDataPage, AddDataPage ]
})
export class DataTabsPage {
  valueforngif = true;
  dataPage = DataPage;
  tabIndex: number = 0;
  addDataPage = AddDataPage;
  sendDataPage = SendDataPage;

  user: IUser = {} as any;

  constructor( 
      private appCtrl: App,
      private srvHttp: SrvHttp,
      private srvdata: SrvData,
      private srvGeneral: SrvGeneral,
      private navCtrl: NavController,
      private translate: TranslateService ) {
        
  }

  public refreshData = ( ): void => {
    this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours"));

    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers();
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });

      this.srvdata.getMesDonnees( options )
          .timeout(10000) 
          .subscribe(
            data => { 
              this.appCtrl.getRootNav().setRoot(DataTabsPage);
              this.srvGeneral.setLoader(false); },
            err  => { 
              this.appCtrl.getRootNav().setRoot(DataTabsPage); 
              this.srvGeneral.setLoader(false);
              this.srvHttp.handleError(err);
            }
          );
    }
     
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
