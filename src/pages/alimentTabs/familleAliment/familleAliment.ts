import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';

import { AlimentPage } from '../aliment/aliment';
import { HomePage } from '../../../pages/home/home';
import { SrvHttp } from '../../../providers/srvHttp';
import { SrvGeneral } from '../../../providers/srvGeneral';

@Component({
  selector: 'page-familleAliment',
  templateUrl: 'familleAliment.html',
  providers: [SrvHttp]
})
export class FamilleAlimentPage {
  MES_FAVORIS: number = 14;

  favoris: boolean = false;

  listFamille: any;
  listMesAliments: any;
  
  constructor( 
      private http: Http, 
      private srvHttp: SrvHttp,
      private params: NavParams, 
      private srvGeneral: SrvGeneral,
      private navCtrl: NavController,
      private translate: TranslateService ) {
              
      this.favoris = params.get("favoris");     
      if(this.favoris){
        this.getFamilleAliment();
        this.navCtrl.push( AlimentPage, { idFamille: this.MES_FAVORIS } );
      }
      else{
        this.getFamilleAliment();
      }

  }

  /*
  ionViewDidLoad() {      
    if(this.favoris){
      this.navCtrl.push( AlimentPage, { idFamille: this.MES_FAVORIS } );
    }
  } 
  */

  public getFamilleAliment = (): void => { 
    if(!this.favoris){
      this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours"));
    }

    var langue = localStorage.getItem("langue");
    this.listFamille = this.srvHttp.getFamilleAliment();   

    if(this.listFamille!=null){     
      if(langue=='en'){
        this.listFamille.forEach(function(famille) {
          famille.nom = famille.nom_en;
        }); 
      }
      else if(langue=='de'){
        this.listFamille.forEach(function(famille) {
          famille.nom = famille.nom_de;
        }); 
      }      

      this.listFamille.splice(0, 0, { id: 0, nom: this.translate.instant("msg.tous"), ordre: 0});
      
      if(!this.favoris){
        this.srvGeneral.setLoader(false);
      }
    }
    else {     
      this.listFamille = "[]";
      this.srvGeneral.setLoader(false);
      this.srvGeneral.setMessage(this.translate.instant("msg.erreurConnexionServeur"));
    }
  }

  public callAlimentFamille = ( famille ): void => {   
    this.navCtrl.push( AlimentPage, { idFamille: famille.id } );
  }

  public goHome = (): void => {
    this.navCtrl.setRoot( HomePage );
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
}
