import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { normalizeURL } from 'ionic-angular';

import { IUser } from '../models/user';
import { IMesAliments } from '../models/mesAliments';
import { IAlimentAdd } from '../models/addAliment';

import { SrvHttp } from '../providers/srvHttp';
import { SrvGeneral } from '../providers/srvGeneral';

declare var cordova:any;


@Injectable()
export class SrvAliment {
  MES_ALIMENTS: number = 14;
  ALIMENT_PHOTO: number = 13;
    
  user: IUser = {} as any;
  mesAliments: IMesAliments = {} as any;
  lastImage: string = null;
  lstAlimentAdd: IAlimentAdd[] = {} as any;
  


  constructor( 
    private http: Http,
    private events: Events,
    private camera: Camera,
    private srvHttp: SrvHttp,
    private platform: Platform,
    private srvGeneral: SrvGeneral,
    private translate: TranslateService ) {
      
  }

  public takePicture = ( sourceType ): any => {
    this.platform.ready().then(() => { 
      
      // Create options for the Camera Dialog
      const options: CameraOptions = {
        quality: 80,
        targetWidth: 512,
        targetHeight: 512,
        sourceType: sourceType,
        correctOrientation: true,
        mediaType: this.camera.MediaType.PICTURE,
        encodingType: this.camera.EncodingType.JPEG,
        destinationType: this.camera.DestinationType.DATA_URL
      }
      // Get the data of an image
      this.camera.getPicture(options).then((imageData) => {
        let base64Image = null;
              //get photo from the camera based on platform type
                base64Image = "data:image/jpeg;base64," + imageData;
        // Call Events de ajoutAliment.ts afin d'afficher l'image à l'écran
          this.events.publish('initImageSrc', base64Image);
        }, (err) => {
          this.srvGeneral.presentToast(this.translate.instant("msg.image.error.select"));
        });
    });
  }

  public upload =  ( dataFile: string, nom: string, hdc: number, unite: number):void=>  { 
   this.platform.ready().then(() => {
      //this.srvGeneral.setLoader(true);

      // Destination URL
      var url = this.srvHttp.SERVER_URL + this.srvHttp.urlMesdAliment;  

      this.user = JSON.parse(localStorage.getItem('User'));
      if(this.user && this.user.num && this.user.num.length>0){
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
        headers.append('user', this.user.num);
        let options = new RequestOptions({ headers: headers });

        this.mesAliments.idFamille = this.MES_ALIMENTS;
        this.mesAliments.nom = nom;
        this.mesAliments.nom_en = nom;
        this.mesAliments.nom_de = nom;
        this.mesAliments.ordre = 0;
        this.mesAliments.description = "";
        this.mesAliments.image = encodeURIComponent(dataFile);
        this.mesAliments.glucide = hdc;
        this.mesAliments.quantite = unite;
        this.mesAliments.idUti = 0;
        var strMesAliments = JSON.stringify(this.mesAliments);       

        let params = "img=" + strMesAliments;
        this.http.post(url, params, options)
            .subscribe(
                data => {
                  //this.srvGeneral.setLoader(false);
                 
                  this.srvGeneral.setMessage(this.translate.instant("msg.image.enreg"));
                  
                  //this.getMesAliments(options);
               } ,
                err  => {
                    var data = <IAlimentAdd>new Object();
                    data.file=encodeURIComponent(dataFile);
                    data.name=nom;
                    data.nbHdc=hdc;
                    data.unite=unite;
                    this.lstAlimentAdd=this.listLstAddAliment();
                    this.lstAlimentAdd.push(data);
                    localStorage.setItem("addAliment",JSON.stringify(this.lstAlimentAdd));
                  //this.srvGeneral.setLoader(false);
                  this.srvHttp.handleError(err);
                }
            ); 
      }
    
    
    });
  }

  public listLstAddAliment = function () {
    var wd=localStorage.getItem("addAliment");
    if (wd!=null && wd.length!==0) {       
        return  JSON.parse(localStorage.getItem("addAliment"));
    }
    else {
        return localStorage.setItem("addAliment", "[]");
    }
  };

  public getAliments = ( ): void => { 
    let lstData = this.http.get(this.srvHttp.SERVER_URL + this.srvHttp.urlFamilleAliment)
          .timeout(10000)
          .map(res => {   
            localStorage.setItem("FamillesAliments", JSON.stringify(res.json()));                                         
            return res.json(); 
          })
          .subscribe(data => ( data ), (err) => (console.log("getFamillesAliments: Delay exceeded !")));

    lstData = this.http.get(this.srvHttp.SERVER_URL + this.srvHttp.urlAliment)
          .timeout(10000)
          .map(res => {   
            localStorage.setItem("Aliments", JSON.stringify(res.json()));                                                    
            return res.json(); 
          })
          .subscribe(data => ( data ), (err) => (console.log("getAliments: Delay exceeded !")));
  }  

  public getImagesAliments = ( ): void => { 
    this.http.get(this.srvHttp.SERVER_URL + this.srvHttp.urlImageAliment)
          .timeout(10000)
          .map(res => {   
            localStorage.setItem("imagesAliments", JSON.stringify(res.json()));                                         
            return res.json();
          })
          .subscribe(data => ( data ), (err) => (console.log("getImagesAliments: Delay exceeded !")));
  }  

  public getFavoris = ( options: RequestOptions ): void => { 
    this.http.get(this.srvHttp.SERVER_URL + this.srvHttp.urlFavoris, options)
          .timeout(10000)            
          .map(res => {   
            localStorage.setItem("mesRepas", JSON.stringify(res.json()));                                         
            return res.json();
          })
          .subscribe(data => (data), (err) => (console.log("getFavoris: Delay exceeded !")));
  }  

  public getMesAliments = ( options: RequestOptions ): void => { 
    this.http.get( this.srvHttp.SERVER_URL + this.srvHttp.urlMesdAliment, options)
      .timeout(10000)
      .map(res => {                           
        localStorage.setItem("Aliments", JSON.stringify(res.json()));                                                       
        return res.json();
      })
      .subscribe(data => (data), (err) => (console.log("getMesAliments: Delay exceeded !"))); 
  }

  public deleteMesAliments = (id): void => { 
    this.user = JSON.parse(localStorage.getItem('User'));
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers();
      headers.append("Accept", 'application/x-www-form-urlencoded');
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      headers.set('user', this.user.num);
      let options = new RequestOptions({ headers: headers });
      var idAliment = "id="+id;
      this.http.delete( this.srvHttp.SERVER_URL + this.srvHttp.urlMesdAliment+"?"+idAliment, options)
          .timeout(10000)
          .map(res => {                         
            this.getMesAliments(options);                                                     
          })
          .subscribe(data => (data), (err) => (console.log("deleteMesAliments: Delay exceeded !"))); 
    }
  }

  public getAlimentsFamille = ( idFamille?: any ): any => {   
    var lstAlimentPhoto: Array<{ id: number, nom: string, nom_en: string, nom_de: string, quantite: number }> = [];

    let lstData = JSON.parse(localStorage.getItem("Aliments")); 

    if(lstData){               
      if(idFamille===this.ALIMENT_PHOTO){
        let lstImgData = JSON.parse(localStorage.getItem("imagesAliments"));  
        if(lstImgData){             
          for (var i = 0; i < lstData.length; i++) {    
            for (var j = 0; j < lstImgData.length; j++) {
              if(lstImgData[j].diaImagealimentPK.idAliment === lstData[i].id){                                   
                lstAlimentPhoto.push({id: lstData[i].id, nom: lstData[i].nom, nom_en: lstData[i].nom_en, nom_de: lstData[i].nom_de, quantite: lstImgData[j].diaImagealimentPK.quantite});
              }
            }
          }
        }          
        lstData = JSON.stringify(lstAlimentPhoto);
      }
    
//      else if(idFamille===this.MES_ALIMENTS){
//        lstMesAliment = JSON.parse(localStorage.getItem("mesAliments"));             
//        for (var i = 0; i < lstMesAliment.length; i++) {
//          this.listAliment.push({id: lstMesAliment[i].id, nom: lstMesAliment[i].nom, nom_en: lstMesAliment[i].nom, nom_de: lstMesAliment[i].nom, quantite: lstMesAliment[i].quantite, imgData: lstMesAliment[i].image});         
//        }
//        this.lstData = JSON.stringify(this.listAliment); 
//      }
      
      else {
        let aliment: any;
        let listAliment: Array<any> = [];

        for (var i = 0; i < lstData.length; i++) {
          aliment = lstData[i];
          if(aliment.idFamille === idFamille){                   
            listAliment.push(aliment);
          }
        }
        lstData = JSON.stringify(listAliment);          
      }
    }      
            
    return JSON.parse(lstData);
  }   
}
