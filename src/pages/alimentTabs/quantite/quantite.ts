import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl  } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NavController, NavParams, ViewController, Events, Platform } from 'ionic-angular';
import { SrvQuantite } from '../../../providers/srvQuantite';
import { SrvSafeHtml } from '../../../pipes/srvSafeHtml';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';


@Component({
  selector: 'page-quantite',
  templateUrl: 'quantite.html',
  providers: [ SrvQuantite,SrvSafeHtml ]
})

export class QuantitePage {
  unite: number;
  quantite: any = "";
  lstImgData: any;
  idAliment: number;
  imageBase64:string ="";
  quantiteAliment: string;
  alimentAffiche: number = 1;
  callFromList: boolean = false;
  image=null;

  quantite_1 = 0;
  quantite_2 = 0;
  quantite_3 = 0;
  imageAliment = 0;
  imageAliment_1 = null;
  imageAliment_2 = null;
  imageAliment_3 = null;
  imageMonAliment= null;
  imIOS:boolean=false;

  constructor( 
    private events: Events,
    private params: NavParams,
    private navCtrl: NavController,
    private sanitizer: DomSanitizer,
    private safe:SrvSafeHtml,
    private srvQuantite: SrvQuantite,
    private viewCtrl: ViewController,
    private platform: Platform,    
    private translate: TranslateService ) {

      this.idAliment = params.get("aliment");
      this.unite = params.get("unite");     
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

  public getTextUnite = (): any => {
    if(this.unite>1){
      return this.translate.instant("frm.quantite.saisieQuantite");
    }
    else {
      return this.translate.instant("frm.quantite.saisieQuantiteUnite");
    }
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
      this.imageBase64 = this.imageBase64.replace(" ","");
      if (this.platform.is('ios')){
        this.imageMonAliment = this.imageBase64;
      }
      if (this.platform.is('android')) {
      this.imageMonAliment=this.imageBase64;
      }
      this.imageMonAliment=this.imageBase64.replace(/\n|\r/g,"");
      //this.imageMonAliment ='data:image/jpeg;base64,' +this.imageBase64.replace(/\r?\n|\r/g,'');
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
