import { Component } from '@angular/core';
import { DomSanitizer,SafeUrl  } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { NavController, NavParams, ViewController, Events, Platform } from 'ionic-angular';
import { normalizeURL } from 'ionic-angular';
import { SrvQuantite } from '../../../providers/srvQuantite';
import { normalizeUrl } from 'ionic-angular/navigation/deep-linker';
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

  imageAliment = 0;
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
