import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';

import { IUser } from '../models/user';
import { IData } from '../models/data';
import { IConfig } from '../models/config';

import { SrvHttp } from '../providers/srvHttp';
import { SrvGeneral } from '../providers/srvGeneral';

@Injectable()
export class SrvData {
  user: IUser = {} as any;
  data: IData = [] as any;
  config: IConfig = {} as any;

  constructor( 
    private http: Http,
    private srvHttp: SrvHttp,
    private srvGeneral: SrvGeneral,
    private translate: TranslateService ) {

    this.config = JSON.parse(localStorage.getItem("Config"));
  }

  public calculInjection = ( formCalcul, nbHdc: number ): void => {
    var msgErr;
    var msgSubTitle;
    var msgInjection;
   
    var injection=0;
    var calculInjection: boolean = true;

    if(formCalcul.nbHdc==null){
      formCalcul.nbHdc = 0;
    }
    nbHdc += formCalcul.nbHdc;

    var correction = this.getCorrection();

    if((formCalcul.glycemie==null || formCalcul.glycemie==0) && nbHdc!=null && nbHdc>0){     
      if(this.config[0].valeur>0){
        formCalcul.glycemie=this.config[0].valeur;   // Glycemie = Valeur recherchee
        this.data.glycemieAuto = true;         
      }
      else {
        calculInjection = false;
        msgErr = this.translate.instant("msg.noConfig");
      }
    }

    if(calculInjection){
      if(formCalcul.unite!=null && formCalcul.unite>0 && formCalcul.hdc!=null && formCalcul.hdc>0) {
        if(formCalcul.glycemie!=null && formCalcul.glycemie>0) {
          if(this.config[0].valeur>0 && correction>0) {
            injection = (nbHdc * formCalcul.unite) / formCalcul.hdc;
            injection = injection + ((formCalcul.glycemie - this.config[0].valeur) / correction);                    
            injection = this.srvGeneral.roundNumber(injection);
            if(injection<0) injection = 0.0;
            msgInjection = this.translate.instant("msg.injecter") + ": " + injection;
          }
          else if (nbHdc===0) {
            msgInjection = this.translate.instant("msg.saisieNbHdC");
            calculInjection=false;
          }
          else {
            injection = (nbHdc * formCalcul.unite) / formCalcul.hdc;
            injection = this.srvGeneral.roundNumber(injection);
            if(injection<0) injection = 0.0;
            msgSubTitle = this.translate.instant("msg.noCorrection");
            msgInjection = this.translate.instant("msg.injecter") + ": " + injection;
          }
        }
        else {
          msgErr = this.translate.instant("msg.saisieGlycemie");
          calculInjection=false;
        }
      }
      else {
        msgErr = this.translate.instant("msg.verifyConfig");
        calculInjection=false;
      }
    }

    if(calculInjection) {         
      this.srvGeneral.setMessageInjection(msgInjection,msgSubTitle);  
      // Set Data Injection    
    }
    else {         
      this.srvGeneral.setMessage(msgErr);
    }          
  }

  public getCorrection = ( ):number =>  {
    var correction: number = 0;
    var d = new Date();
    var hr = d.getHours();
    var mn = d.getMinutes();    
    var tps = (hr*60)+mn;

    if(tps<420 || tps>1200 ) { // <7h00 OU >20h00
      correction=this.config[0].correctionNuit;
    }
    else {
      correction=this.config[0].correctionJour;
    }
    return correction;
  }

  public setDataToServer = ( formData ): void => {    
    this.data.nbHdc = formData.nbHdc;
    this.data.glycemie = formData.glycemie;
    this.data.injection = formData.injection;
    this.data.dateInj = formData.currentDate.substring(0,10);
    this.data.timeInj = formData.currentDate.substring(11,16);
    this.data.commentaire = formData.commentaire;
    this.data.glycemieAuto = false;
    this.data.glycemieCapteur = false;

    this.srvGeneral.setMessage(this.dataToString(this.data));
  }

  public dataToString = ( data: IData ):string => {
    var str: string;
    str = data.dateInj + " - " + data.timeInj;
    str += "<br>glycémie:" + data.glycemie;
    str += "<br>nbHdc:" + data.nbHdc;
    str += "<br>injection:" + data.injection;
    str += "<br>commentaire:" + data.commentaire;
    return str;
  }

  public getMesDonnees = ( options: RequestOptions ): any => {   
    let lstData = this.http.get( this.srvHttp.SERVER_URL + this.srvHttp.urlData, options);
    return lstData; 
  }

  public sendDataMail = ( mail ): any => {    
    this.user = JSON.parse(localStorage.getItem('User'));
    var params = "a="+mail;
//    var params = { a: mail };
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.set('user', this.user.num);
    let options = new RequestOptions({ headers: headers });

    return this.http.post( this.srvHttp.SERVER_URL + this.srvHttp.urlSendData, params, options )
      .timeout(10000)
      .map(res => res)
      .subscribe((err) => (console.log("Delay exceeded !")));
  }

}
