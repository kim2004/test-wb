import { Component } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { CalculPage } from '../../pages/calcul/calcul';
import { SrvGeneral } from '../../providers/srvGeneral';
import { AjoutAlimentPage } from '../alimentTabs/ajoutAliment/ajoutAliment';
import { FamilleAlimentPage } from '../alimentTabs/familleAliment/familleAliment';

 
@Component({
  templateUrl: 'alimentTabs.html',
  providers: [ AjoutAlimentPage, FamilleAlimentPage, SrvGeneral ]
})
export class AlimentTabsPage {
  classTabbar: any;
  tabBarElement : any;
  valueforngif = true;
  tabIndex: number = 0;
  hideSave: number = 1;  
  listIcon=  'calculListe';
  addIcon='calculMnAl';
  bolusIcon='calculAl';
  calculPage = CalculPage;
  ajoutAlimentPage = AjoutAlimentPage;
  familleAlimentPage = FamilleAlimentPage;

  constructor( 
    private events: Events,
    private params: NavParams,
    private srvGeneral: SrvGeneral,
    private navCtrl: NavController ) {
      
      

      // utilise par la fonction FAVORIS 
      let tabIndex = this.params.get('tabIndex');
      if(tabIndex){       
        this.tabIndex = tabIndex;
      }
      

      // Permet de cacher la "Tabbar" lors de la saisie de la quantité => utilisé dans quantite.ts
      this.events.subscribe('hideTabbar', (data) => {
        this.hideSave =0 ;
        this.hideTabbar( data );        
      });

      

      // permet d'afficher le bouton SAVE uniquement dans l'onglet CALCUL
      this.events.subscribe('hideSave', (data) => {
        this.hideSave = data;     
      });
  }

/*
  ionViewDidLoad() {
      this.tabBarElement = document.querySelector('#idAlimentsTabs div');    
  }
*/  

  public changeOnOff = ( event ) : void =>{
    if(event.index==0){
      this.listIcon=  'calculListeOn';
      this.addIcon='calculMnAl';
      this.bolusIcon='calculAl';
    }else if (event.index==1){
      this.listIcon=  'calculListe';
      this.addIcon='calculMnAlOn';
      this.bolusIcon='calculAl';
    }else if(event.index==2){
      this.listIcon=  'calculListe';
      this.bolusIcon='calculAlOn';
      this.addIcon='calculMnAl';
      }
  }

  private hideTabbar = ( hide ): void => {
    this.tabBarElement = document.querySelector('#idAlimentsTabs div');
    if(hide){
      this.tabBarElement.style.display = 'none';
    }
    else {
      this.tabBarElement.style.display = '';
    }    
  }

  public selectTab = ( event ): void => {
    // Tab - Calcul
    if(event.index === 2) {
      this.events.publish('hideSave', 1);
    }
    else {
      this.events.publish('hideSave', 0);
    }
  }

  public saveFavoris = ( ): void => {
    this.srvGeneral.setMessage("saveFavoris()");
  }
  
  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
