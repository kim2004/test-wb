import { Injectable } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';
import { normalizeURL } from 'ionic-angular';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { IUser } from '../models/user';
import { IMesAliments } from '../models/mesAliments';
import { IAlimentAdd } from '../models/addAliment';

import { SrvHttp } from '../providers/srvHttp';
import { SrvGeneral } from '../providers/srvGeneral';
import { IUserSubscription } from '../models/userSubscription';

declare var cordova:any;


@Injectable()
export class SrvInscription{

    constructor( 
        private http: Http,
        private events: Events,
        private camera: Camera,
        private srvHttp: SrvHttp,
        private platform: Platform,
        private srvGeneral: SrvGeneral,
        private translate: TranslateService ) {
          
      }


      public modifierUser = function (user:IUserSubscription) {
    this.user = JSON.parse(localStorage.getItem('User'));   
    if(this.user && this.user.num && this.user.num.length>0){
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      headers.set('user', this.user.num);
        let options = new RequestOptions({ headers: headers }); 
       
        var civilite = "civ="+user.sexe;
        var nom = "&n="+user.nom;
        var prenom="&p="+user.prenom;
        var mail= "&m="+user.mail;
        var pass="&p1="+user.mdp;
        var hash="&hc=1234&mp=kk&ma=j&mv=er&mville=zz&mt=uu&mc=we";
        var code="&c=0";
        
        let params= civilite+nom+prenom+mail+pass+code+hash;
         return this.http.post(this.srvHttp.SERVER_URL+this.srvHttp.urlUtilisateur, params,options)
         //.toPromise()
         .timeout(10000)
          .subscribe(
            data => { 
                this.srvGeneral.setMessage('msg.modifProfil');
             },
            err  => {
              this.srvHttp.handleError(err);
            }
          );
        } 
      }

      public inscription = function (user:IUserSubscription) {
            let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
            let options = new RequestOptions({ headers: headers });  
       
        var civilite = "civ="+user.sexe;
        var nom = "&n="+user.nom;
        var prenom="&p="+user.prenom;
        var mail= "&m="+user.mail;
        var pass="&p1="+user.mdp;
        var pass2="&p2="+user.mdp;
        var hash="&hc=1234";
        var code="&c=0";
        var medecin="&medecin=0";
        var langue="&language="+localStorage.getItem("langue").toString();
        
        let params= civilite+nom+prenom+mail+pass+hash+code+medecin+langue;
         return this.http.post(this.srvHttp.SERVER_URL+this.srvHttp.urlInscription, params,options)
         .timeout(10000)
          .subscribe(
            data => { 
                this.srvGeneral.setMessage(this.translate.instant('msg.inscriptionConfirme'));
             },
            err  => { 
              this.srvHttp.handleError(err);
            }
          );
         
      }

     public isValidEmailAddress = function ( emailAddress ) {    
        if(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            if(!pattern.test(emailAddress)) {
                this.srvGeneral.setMessage(this.translate.instant('msg.adresseEmailInvalide'));
                return false;
            }
        }
        return true;
    };
    }