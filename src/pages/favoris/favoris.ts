import { Component } from '@angular/core';
import { NavController, App, Events, ViewController, AlertController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';

import { HomePage } from '../../pages/home/home';
import { SrvHttp } from '../../providers/srvHttp';
import { QuantitePage } from '../../pages/alimentTabs/quantite/quantite';
import { SrvGeneral } from '../../providers/srvGeneral';
import { SrvAliment } from '../../providers/srvAliment';


@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
  providers: [ SrvHttp, SrvGeneral ]
})

export class FavorisPage {  
  MES_ALIMENTS: number = 14;

  listFavoris: any;

  constructor( 
    private appCtrl: App,
    private events: Events,
    private srvHttp: SrvHttp,
    private srvAliment: SrvAliment,
    private srvGeneral: SrvGeneral,
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private translate: TranslateService ) {
 
      this.listFavoris = this.srvAliment.getAlimentsFamille(this.MES_ALIMENTS);

  }

  public getQuantite = ( idAliment, unite ): void => { 
    this.navCtrl.push(QuantitePage,{aliment: idAliment, unite: unite, quantite: 0, callFromList: true});
    this.viewCtrl.dismiss();
  }

  public deleteMesAliments = ( idAliment ): void => {
    event.stopPropagation();
    let alert = this.alertCtrl.create({
      title: "Suppression",
      message: "Etes vous sûr de vouloir supprimer cet aliment ?",
      mode:'ios',
//      cssClass: 'alertDanger',
      enableBackdropDismiss: false,
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Ok', handler: () => {
          this.srvAliment.deleteMesAliments(idAliment);
          this.listFavoris = this.srvAliment.getAlimentsFamille(this.MES_ALIMENTS);
        }}
      ]
    });
    alert.present(); 
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
}
