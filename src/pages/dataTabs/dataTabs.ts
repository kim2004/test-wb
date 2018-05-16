import { Component, ViewChild } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { NavController, Tabs, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { NgZone } from '@angular/core';
import { IUser } from '../../models/user';

import { DataPage } from '../dataTabs/data/data';
import { HomePage } from '../../pages/home/home';
import { SrvHttp } from '../../providers/srvHttp';
import { SrvData } from '../../providers/srvData';
import { SrvGeneral } from '../../providers/srvGeneral';
import { AddDataPage } from '../dataTabs/addData/addData';
import { SendDataPage } from '../dataTabs/sendData/sendData';
import { instanceAvailability } from '@ionic-native/core';
import { Tab } from 'ionic-angular/components/tabs/tab';


@Component({
  templateUrl: 'dataTabs.html',
  providers: [ SrvGeneral, Tabs, DataPage, SendDataPage, AddDataPage ]
})
export class DataTabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  valueforngif = true;
  dataPage = DataPage;
  tabIndex: number = 0;
  addDataPage = AddDataPage;
  sendDataPage = SendDataPage;
  mynum:number;
  
  listIcon=  'calculListeOn';
  addIcon='calculMnAl';
  syncIcon='syncData';
  sentIcon='sentData';

  user: IUser = {} as any;

  constructor( 
      private appCtrl: App,
      private srvHttp: SrvHttp,
      private srvdata: SrvData,
      private srvGeneral: SrvGeneral,
      private navCtrl: NavController,
      private translate: TranslateService) {
        
  }

  public refreshData = (): void => {
    this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours"));
    
    this.user = JSON.parse(localStorage.getItem('User'));   
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers();
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });
      this.srvdata.getMesDonnees( options )
          .timeout(10000) 
          .map((res) =>{
            localStorage.setItem("lastData",  JSON.stringify(res.json()));
          })
          .subscribe(
            data => { 
              this.appCtrl.getRootNav().push(DataTabsPage);
                  this.srvGeneral.setLoader(false);
                  localStorage.removeItem("localData");
              },
            err  => { 
              this.appCtrl.getRootNav().setRoot(DataTabsPage); 
              this.srvGeneral.setLoader(false);
              this.srvHttp.handleError(err);
            }
          );
    }
}
  

  public changeOnOff = ( event ) : void =>{
    
    if(event.index==0){
      this.listIcon=  'calculListeOn';
      this.addIcon='calculMnAl';
      this.syncIcon='syncData';
      this.sentIcon='sentData';
    }else if (event.index==1){
      this.listIcon=  'calculListe';
      this.addIcon='calculMnAlOn';
      this.syncIcon='syncData';
      this.sentIcon='sentData';
    }else if(event.index==2){
      this.listIcon=  'calculListe';
      this.addIcon='calculMnAl';
      this.syncIcon='syncData';
      this.sentIcon='sentData';
      }else if(event.index==3){
        this.listIcon=  'calculListe';
        this.addIcon='calculMnAl';
        this.syncIcon='syncData';
        this.sentIcon='sentDataOn';
        }
  }



  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
