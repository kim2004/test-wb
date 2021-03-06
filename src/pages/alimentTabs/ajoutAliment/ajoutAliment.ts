import { Component, ViewChild } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { List } from 'ionic-angular/components/list/list';
import { NavController, AlertController, ActionSheetController, Platform, Events } from 'ionic-angular';


import { HomePage } from '../../../pages/home/home';
import { SrvAliment } from '../../../providers/srvAliment';
import { SrvGeneral } from '../../../providers/srvGeneral';
import { IMesAliments } from '../../../models/mesAliments';
import { IAlimentAdd } from '../../../models/addAliment';

declare var cordova:any;


@Component({
  selector: 'page-ajoutAliment',
  templateUrl: 'ajoutAliment.html',
  providers: [ SrvGeneral, SrvAliment, Camera ]
})
export class AjoutAlimentPage { 
  
  nom: string = "";
  unite: number = 0;
  nbHdc: string = "";
  base64Image: string = null;
  lstAlimentAdd: IAlimentAdd[] = {} as any; ;
//  clearNom : string
//  clearHdc : number;
  img:boolean=false;


  constructor( 
    private events: Events,
    private camera: Camera,
    private navCtrl: NavController,
    private translate: TranslateService,
    private platform: Platform,
    private srvAliment: SrvAliment,
    private srvGeneral: SrvGeneral,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController ) {

      // Permet d'initialiser l'image "lastImage", appelé dans le provider srvAliment.ts
      this.events.subscribe('initImageSrc', (dataImage) => {
        this.base64Image = dataImage;      
      });

    }

  public onChangeNom = ( data ): void => {
    this.nom = data;  
  }
  public onChangeHdc = ( data ): void => {
    this.nbHdc = data;    
  } 
  public onChangeUnite = ( data, item ): void => {
    this.unite = item;   // 1 = 100gr. - 2 = unité
  }  

  public selectImage = ( ): void => {
    let alert = this.alertCtrl.create();
    alert.setTitle(this.translate.instant("msg.image.select.titre"));

    alert.addInput({
      type: 'radio',
      label: this.translate.instant("msg.image.librairie"),
      value: 'lib',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: this.translate.instant("msg.image.camera"),
      value: 'cam',
      checked: true
    });

    alert.addButton(this.translate.instant("button.annuler"));
    alert.addButton({
      text: this.translate.instant("button.ok"),
      handler: data => {
        var l:string=null;
        if(data=='lib'){
          this.srvAliment.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
        else {
          this.srvAliment.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      }
    });
    alert.present();
  }

  public setRepas = ( ): void => {
    var data: {};
    this.platform.ready().then(() => {   
      if(this.nom && this.nom.length>0){
        if(this.nbHdc && this.nbHdc.length>0){
          this.srvAliment.upload(this.base64Image, this.nom, Number.parseFloat(this.nbHdc), this.unite);
          this.base64Image=null;
//          this.clearHdc=0;
//          this.clearNom="";
        }
        else {
          this.srvGeneral.setMessage(this.translate.instant("msg.saisieNbHdC"));
        }
      }
      else {
        this.srvGeneral.setMessage(this.translate.instant("msg.saisieNom"));
      }      
    })
  }

  public resetChamps= ():void=>{
    this.events.subscribe('initImageSrc', (dataImage) => {
      this.base64Image=null;     
    });
  }

/* ---------------------------------------------------------------------------------------------------------------- */
   
  public goHome = (): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

  
}
