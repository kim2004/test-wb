import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController, Platform, Events } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';

import { IData } from '../../models/data';
import { IRepas } from '../../models/repas';
import { IConfig } from '../../models/config';
import { HomePage } from '../../pages/home/home';
import { SrvData } from '../../providers/srvData';
import { SrvGeneral } from '../../providers/srvGeneral';
import { SrvQuantite } from '../../providers/srvQuantite';
import { QuantitePage } from '../../pages/alimentTabs/quantite/quantite';


@Component({
  selector: 'page-calcul',
  templateUrl: 'calcul.html',
  providers: [ SrvGeneral, SrvData, SrvQuantite ]
})


export class CalculPage {
  xHdc: any;
  xUnite: any;
  lstData: any;
  nbAllHdc: any;
  formCalcul: FormGroup; 
  trancheHoraire: string = 'u1';
  display: boolean = true;
  displayList: boolean = false;

  data: IData = {} as any;
  repas: IRepas = {} as any;
  config: IConfig = {} as any;
  lstRepas: IRepas = {} as any;
  id=1;
  addIcon="add-circle";
  valuedefault=0;
  
  repasHoraire: Array<{ value: string, text: string }> = [];

  constructor( 
    private events: Events,
    private srvData: SrvData,
    private platform: Platform,
    private srvGeneral: SrvGeneral,
    private navCtrl: NavController,
    private srvQuantite: SrvQuantite,
    private translate: TranslateService ) {

      this.lstRepas = JSON.parse(localStorage.getItem("repas"));                 
      if(this.lstRepas!=null){        
        this.nbAllHdc = this.srvQuantite.getNbHdcRepas() + " " + this.translate.instant("msg.hdc");
        this.display = true;
      }
      else {
        this.display = false;
      }    

/*
      this.repasHoraire = this.srvGeneral.initTrancheHoraire();
      this.trancheHoraire = this.srvGeneral.getTrancheHoraire();
      this.initTrancheHoraire(this.srvGeneral.getTrancheHoraire());
*/      
      this.initInput(this.trancheHoraire);
      this.events.subscribe('afficheHdC', (data) => {
        this.afficheHdC( data );        
      });
    
    }

 
  public ionViewDidLoad = ( ):void => {
    // Permet d'attendre la fin du chargement de la page et de la traduction
    this.platform.ready().then(() => {
      this.repasHoraire = this.srvGeneral.initTrancheHoraire();
      this.trancheHoraire = this.srvGeneral.getTrancheHoraire();
      this.initTrancheHoraire(this.trancheHoraire);      
    })
  }

  public initInput=(tranche):void =>{
    this.formCalcul = new FormGroup({
      trancheHoraire: new FormControl(tranche, Validators.required),          
      nbHdc: new FormControl(""),
      unite: new FormControl(this.xUnite, Validators.required),
      hdc: new FormControl(this.xHdc, Validators.required),
      glycemie: new FormControl("")
    });  
  }

  public afficheHdC = ( data ): void => {
    this.lstRepas = JSON.parse(localStorage.getItem("repas")); 
    if(this.lstRepas!=null){        
      this.nbAllHdc = this.srvQuantite.getNbHdcRepas() + " " + this.translate.instant("msg.hdc");
    }
  }

  public getQuantite = ( idAliment ): void => {      
    this.repas = this.srvQuantite.getAlimentSelect( idAliment );   
    this.navCtrl.push(QuantitePage,{aliment: this.repas.idAliment, quantite: this.repas.quantite, callFromList: false});
  }

  public validateCalcul = ( formCalcul ): void => { 
    this.trancheHoraire = this.srvGeneral.getTrancheHoraire(); 
    if(this.formCalcul.valid){ 
      this.srvData.calculInjection(formCalcul, this.srvQuantite.getNbHdcRepas());
      this.initInput(this.trancheHoraire);
    }
//    else if(!this.formCalcul.value.unite || !this.formCalcul.value.xHdc){
    else {
      this.srvGeneral.setMessage(this.translate.instant("msg.config.rapport.erreur"));
    }
  }

  public changeOnOff = ( event ) : void =>{
    if (this.id==1){
      this.id=2;
      this.addIcon="remove-circle"
    }else if (this.id==2){
      this.id=1;
      this.addIcon="add-circle";
    }
  }
  private initTrancheHoraire = ( tranche ): void => {  
    this.config = JSON.parse(localStorage.getItem("Config")); 
    if(tranche=='u1'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc1;
        this.xUnite = this.config==null ? "" : this.config[0].unite1;
      }
      else if(tranche=='u2'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc2;
        this.xUnite = this.config==null ? "" : this.config[0].unite2;
      }
      else if(tranche=='u3'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc3;
        this.xUnite = this.config==null ? "" : this.config[0].unite3;
      }
      else if(tranche=='u4'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc4;
        this.xUnite = this.config==null ? "" : this.config[0].unite4;
      }
      else if(tranche=='u5'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc5;
        this.xUnite = this.config==null ? "" : this.config[0].unite5;
      }
      else if(tranche=='u6'){
        this.xHdc = this.config==null ? "" : this.config[0].hdc6;
        this.xUnite = this.config==null ? "" : this.config[0].unite6;
      }  

      this.initInput(tranche);
  }

  public goHome = ( ):void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
