import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from 'ionic-angular/index';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

import { SrvSort } from "../../../pipes/srvSort"
import { QuantitePage } from '../quantite/quantite';
import { SrvHttp } from '../../../providers/srvHttp';
import { SrvAliment } from '../../../providers/srvAliment';
import { SrvGeneral } from '../../../providers/srvGeneral';
import { FamilleAlimentPage } from '../familleAliment/familleAliment';


@Component({
  selector: 'page-aliment',
  templateUrl: 'aliment.html',
  providers: [ SrvHttp, SrvGeneral, SrvAliment, SrvSort ],
})
export class AlimentPage { 
  MES_ALIMENTS: number = 14;

  param: any;
  items: any;
  quantite: any;
  listAliment: any;
  idFamille: number;
  searchTerm: string = '';
  isMesAliments : number = 0;

  constructor( 
    private http: Http, 
    private srvHttp: SrvHttp, 
    private params: NavParams, 
    private srvAliment: SrvAliment,
    private navCtrl: NavController, 
    private srvGeneral: SrvGeneral,
    private viewCtrl: ViewController,
    private loading: LoadingController, 
    private alertCtrl: AlertController,
    private translate: TranslateService ) {

    this.param = params.get("idFamille");       
    this.getAlimentFamille(this.param);
  }

  public getAlimentFamille = ( idFamille ): void => {
    this.srvGeneral.setLoader(true,this.translate.instant("msg.chargement_en_cours"));

    this.idFamille = idFamille;  
    this.refreshListAlimentFamille( );
    
    this.srvGeneral.setLoader(false); 
  }

  private refreshListAlimentFamille = ( ): void => {
    var langue = localStorage.getItem("langue");    
    this.listAliment = this.srvAliment.getAlimentsFamille(this.idFamille);

    if(this.idFamille>0){
      if(this.idFamille===this.MES_ALIMENTS){
        this.isMesAliments = this.MES_ALIMENTS;
      }

      if(langue=='en'){
        this.listAliment.forEach(function(aliment) {
          aliment.nom = aliment.nom_en;
        }); 
      }
      else if(langue=='de'){
        this.listAliment.forEach(function(aliment) {
          aliment.nom = aliment.nom_de;
        }); 
      }
    }    
  }

  public setFilteredItems = ( searchBar ): boolean => {
    if(this.idFamille>0){
      this.refreshListAlimentFamille( );
    }
    else {
      this.listAliment = JSON.parse(localStorage.getItem("Aliments"));
    }

    // set q to the value of the searchbar
    var searchValue = searchBar.srcElement.value;

    // if the value is an empty string don't filter the items 
    if (!searchValue) {
      if(this.idFamille==0){
        this.listAliment = [];
      }
      return false;
    }  
    this.listAliment = this.listAliment.filter((item) => {
      if(item.nom && searchValue) {
        if(this.srvGeneral.stripVowelAccent(item.nom.toLowerCase().substring(0, searchValue.length))===searchValue.toLowerCase()){
          return true;
        }
        return false;
      }   
    });
  }

  public returnListeFamille = ( ): void => {
    this.navCtrl.push(FamilleAlimentPage,{},{animate: true, direction: 'back'});
  }

  public getQuantite = ( idAliment ): void => {
    this.navCtrl.push(QuantitePage,{aliment: idAliment, quantite: 0, callFromList: true});
    this.viewCtrl.dismiss();
  }

  public deleteMesAliments = ( item ): void => {

    let alert = this.alertCtrl.create({
      title: "Suppression",
      message: "Etes vous sûr de vouloir supprimer cet aliement ?",
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Ok', handler: () => {this.srvAliment.deleteMesAliments();}}
      ]
    });

    alert.present();

  }

}
