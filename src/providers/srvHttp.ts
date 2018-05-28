import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { SrvGeneral } from '../providers/srvGeneral';


/*
  Generated class for the Famille provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class SrvHttp {

  urlData: any;
  urlProfil: any;
  urlFavoris: any;
  urlAliment: any;
  urlPassword: any;
  urlSendData: any;
  urlConnexion: any;
  urlMesdAliment: any;
  urlImageAliment: any;
  urlFamilleAliment: any;
  urlUtilisateur :any;
  urlInscription:any;
  SERVER_URL = 'http://www.kmconcept.net/webdia/';
//  SERVER_URL = 'http://localhost:8084/webdia/';

  constructor( 
    private srvGeneral: SrvGeneral,
    private translate: TranslateService ) {
 
    this.urlProfil = 'profil';
    this.urlSendData = 'mail';
    this.urlData = 'injection';
    this.urlFavoris = 'favoris';
    this.urlAliment = 'aliments';
    this.urlPassword = 'password';
    this.urlConnexion = 'connexion';
    this.urlMesdAliment = 'mesAliments';
    this.urlImageAliment = 'imagesAliments';
    this.urlFamilleAliment = 'familleAliments';
    this.urlUtilisateur= 'utilisateur';
    this.urlInscription= 'inscription';
  }  

  public getFavoris = ( ): void => {
    return JSON.parse(localStorage.getItem("mesRepas"));           
  }  

  public getFamilleAliment = ( ): void => {
    return JSON.parse(localStorage.getItem("FamillesAliments"));           
  }  

  public handleError = ( error: any ): any => {
    try {
      var errorText = error.text();
      if(errorText && errorText.search('<u>')>0){      
        this.srvGeneral.setMessage(errorText.substring(errorText.search('<u>')+3,errorText.search('</u>')));
      }
      else {
        this.srvGeneral.setMessage(this.translate.instant("msg.erreurConnexionServeur"));
      }
    }
    catch(err) {
      this.srvGeneral.setMessage(this.translate.instant("msg.erreurConnexionServeur"));
    }
  }

  
}
