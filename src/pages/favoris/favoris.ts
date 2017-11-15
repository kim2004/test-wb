import { Component } from '@angular/core';
import { NavController, App, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/map';

import { HomePage } from '../../pages/home/home';
import { SrvHttp } from '../../providers/srvHttp';
import { SrvGeneral } from '../../providers/srvGeneral';
import { AlimentTabsPage } from '../../pages/alimentTabs/alimentTabs';

import { IRepas } from '../../models/repas';

@Component({
  selector: 'page-favoris',
  templateUrl: 'favoris.html',
  providers: [ SrvHttp, SrvGeneral ]
})

export class FavorisPage {  
  listFavoris: any;
  repas: IRepas = {} as any;
  lstRepas: IRepas[] = [];

  constructor( 
    private appCtrl: App,
    private events: Events,
    private srvHttp: SrvHttp,
    private srvGeneral: SrvGeneral,
    private navCtrl: NavController,
    private translate: TranslateService ) {

      this.getFavoris();

  }

  private getFavoris = ( ): void => {
    this.srvGeneral.setLoader(true, this.translate.instant("msg.chargement_en_cours"));
    this.listFavoris = this.srvHttp.getFavoris();
    this.srvGeneral.setLoader(false);
  }

  public callFavoris = ( favoris ): void => {
    if(favoris && favoris.compositions && favoris.compositions.length>0){
      for(var i=0; i<favoris.compositions.length; i++) {
        this.repas = {} as any;
        var item = favoris.compositions[i];           
        this.repas.id = 0;
        this.repas.idRepas = 0;
        this.repas.quantite = item.quantite;
        this.repas.idAliment = item.idAliment;
        this.repas.unite = item.unite;
        this.repas.nbHdc = item.nbHdc;
        this.repas.nom = item.nom;
        this.lstRepas.push(this.repas);
      }  
      localStorage.setItem("repas", JSON.stringify(this.lstRepas));              
    }

    this.navCtrl.push(AlimentTabsPage,{tabIndex:2});
  }

  public deleteFavoris = ( favoris ): void => { 
    this.srvGeneral.setMessage("deleteFavoris("+favoris+")");
  }

  public goHome = ( ): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }
}
