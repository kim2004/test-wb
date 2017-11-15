import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { TranslateService } from '@ngx-translate/core';
import { NavController, AlertController, ActionSheetController, Platform, Events } from 'ionic-angular';

import { HomePage } from '../../../pages/home/home';
import { SrvAliment } from '../../../providers/srvAliment';
import { SrvGeneral } from '../../../providers/srvGeneral';

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
//        this.base64Image = 'data:image/jpeg;base64,' + dataImage; 
        this.base64Image = dataImage;            
      });
  }

  public onChangeNom = ( data ): void => {
    this.nom = data;  
/*    
    if(this.nom.length>0 && this.nbHdc.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    } 
*/    
  }
  public onChangeHdc = ( data ): void => {
    this.nbHdc = data;  
/*    
    if(this.nom.length>0 && this.nbHdc.length>0){
      this.buttonDisabled = null;
    }
    else {
      this.buttonDisabled = true;
    }
*/    
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
    this.platform.ready().then(() => {   
      if(this.nom && this.nom.length>0){
        if(this.nbHdc && this.nbHdc.length>0){
          this.srvAliment.upload(this.base64Image, this.nom, this.nbHdc, this.unite);
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

/* ---------------------------------------------------------------------------------------------------------------- */
   
  public goHome = (): void => {
    this.navCtrl.setRoot( HomePage, {}, {animate: true, direction: 'back'} );
  }

  
}
