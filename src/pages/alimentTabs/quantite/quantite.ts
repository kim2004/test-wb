import { Component } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

import { SrvQuantite } from '../../../providers/srvQuantite';


@Component({
  selector: 'page-quantite',
  templateUrl: 'quantite.html',
  providers: [ SrvQuantite ],
})

export class QuantitePage {
  quantite: any = "";
  lstImgData: any;
  idAliment: number;
  imageBase64: string = "";
  quantiteAliment: string;
  alimentAffiche: number = 1;
  callFromList: boolean = false;

  quantite_1 = 0;
  quantite_2 = 0;
  quantite_3 = 0;
  imageAliment = 0;
  imageAliment_1 = null;
  imageAliment_2 = null;
  imageAliment_3 = null;
  imageMonAliment = null;

  constructor( 
    private events: Events,
    private params: NavParams,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private srvQuantite: SrvQuantite,
    private viewCtrl: ViewController,    
    private translate: TranslateService ) {

      this.idAliment = params.get("aliment");
      this.quantite = params.get("quantite");
      this.callFromList = params.get("callFromList");
      this.affQuantite();      
  }

  public ionViewDidLoad = (): void => {
    this.events.publish('hideTabbar', true);
  }

  public ionViewWillLeave = (): void => {
    this.events.publish('hideTabbar', false);
  }

  public affQuantite = (): void => {
    var nbAliment=0;
    this.imageAliment_1 = null;
    this.imageAliment_2 = null;
    this.imageAliment_3 = null;
    this.lstImgData = JSON.parse(localStorage.getItem("imagesAliments"));  
    if(this.lstImgData){             
      for (var i = 0; i < this.lstImgData.length; i++) {    
        if(this.lstImgData[i].diaImagealimentPK.idAliment === this.idAliment){ 
          nbAliment++;
          if(nbAliment<=3){
            var img = "assets/img/aliments/"+this.lstImgData[i].diaImagealimentPK.idAliment+'_'+this.lstImgData[i].diaImagealimentPK.quantite+'.jpg';
            if(nbAliment===1){
              this.imageAliment = 1;
              this.imageAliment_1 = img;
              this.quantite_1 = this.lstImgData[i].diaImagealimentPK.quantite;
            }
            else if(nbAliment===2){
              this.imageAliment = 2;
              this.imageAliment_2 = img;
              this.quantite_2 = this.lstImgData[i].diaImagealimentPK.quantite;
            }
            else if(nbAliment===3){
              this.imageAliment = 3;
              this.imageAliment_3 = img;
              this.quantite_3 = this.lstImgData[i].diaImagealimentPK.quantite;
            }
          }
        }
      }
    }
    if(this.quantite==0){this.quantite="";}
    this.quantiteAliment = this.translate.instant("frm.quantite.saisie") + "<br>" + this.srvQuantite.getNomAliment(this.idAliment);

    this.imageBase64 = this.srvQuantite.getImageAliment(this.idAliment);
    if(this.imageBase64){ 
      this.imageMonAliment = this.imageBase64;
    }
  }

  public setQuantite = ( num ): void => {
    if(num===1){
      this.alimentAffiche = 1;
      this.quantite = this.quantite_1;
    }
    else if(num===2){
      this.alimentAffiche = 2;
      this.quantite = this.quantite_2;
    }
    else if(num===3){
      this.alimentAffiche = 3;
      this.quantite = this.quantite_3;
    }
  }

  public getQuantite = ( quantite ): void => {
    this.quantite = quantite;
  }

  public calculHdc = (): void => {
    this.srvQuantite.calculHdc(this.idAliment,this.quantite);  
    
    // Permet de calculer le total des HdC et d'afficher les aliments
    this.events.publish('afficheHdC', true);

    // Select Tab Calcul
    this.navCtrl.parent.select(2);
    
    if(this.callFromList){
      this.viewCtrl.dismiss();
    }  
  }

  public returnAliment = (): void => {
    this.navCtrl.pop();
//    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

}
