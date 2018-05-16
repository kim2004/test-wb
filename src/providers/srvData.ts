import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';

import { IUser } from '../models/user';
import { IData } from '../models/data';
import { IConfig } from '../models/config';

import { SrvHttp } from '../providers/srvHttp';
import { SrvGeneral } from '../providers/srvGeneral';
import { IMesAliments } from '../models/mesAliments';
import { Observable } from 'rxjs/Observable';
import { timeout } from 'rxjs/operator/timeout';
import { Serializer } from '@angular/compiler/src/i18n/serializers/serializer';

@Injectable()
export class SrvData {
  user: IUser = {} as any;
  data: IData = [] as any;
  config: IConfig = {} as any;
  aliments :IMesAliments = {} as any;
  lstDataD: IData = {} as any;

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
        this.data.glycemieAuto = 1;         
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

    this.data.nbHdc = Number.parseFloat(formData.nbHdc);
    this.data.glycemie = Number.parseFloat(formData.glycemie);
    this.data.injection = Number.parseFloat(formData.injection);
    this.data.dateInj = formData.currentDate.substring(0,10);
    this.data.timeInj = formData.currentDate.substring(11,16);
    this.data.commentaire = formData.commentaire;
    this.data.glycemieAuto = 0;
    this.data.glycemieCapteur = 0;
    var tranche=formData.trancheHoraire;
    var numRepas:number;
    if (tranche==="u1"){
        numRepas=1;
    }
    else if (tranche==="u2"){
      numRepas=2;
    }
    else if (tranche==="u3"){
      numRepas=3;
    }
    else if (tranche==="u4"){
      numRepas=4;
    }
    else if (tranche==="u5"){
      numRepas=5;
    }
    else if (tranche==="u6"){
      numRepas=6;
    }
    this.data.repas=numRepas;
   
    //this.srvGeneral.setMessage(this.dataToString(this.data));
    
    this.savedData(this.data);
    //localStorage.setItem("Donnees", JSON.stringify(this.dataToJson(this.data))); 
  }

  public dataToJson = ( data: IData ):  any => {
    this.data.idUti=this.config[0].idUti;
    this.lstDataD.idUti=this.data.idUti;
    this.lstDataD.timeInj=this.data.timeInj;
    this.lstDataD.dateInj=this.data.dateInj;
    this.lstDataD.nbHdc=this.data.nbHdc;
    this.lstDataD.glycemie=this.data.glycemie;
    this.lstDataD.injection=this.data.injection;
    this.lstDataD.commentaire=this.data.commentaire;
    this.lstDataD.glycemieAuto=this.data.glycemieAuto;
    this.lstDataD.glycemieCapteur=this.data.glycemieCapteur;
    this.lstDataD.repas=this.data.repas;
   return this.lstDataD;

  }

  public listLocalData = function () {
    var wd=localStorage.getItem("localData");
    if (wd!=null && wd.length!=0){
      return  JSON.parse(localStorage.getItem("localData")) ;
}
  else {
      return localStorage.setItem("localData", "[]");
  }
}

public listData = function () {
  var wd=localStorage.getItem("lastData");
  if (wd!=null && wd.length!==0) {       
      return  JSON.parse(localStorage.getItem("lastData"));
  }
  else {
      return localStorage.setItem("listData", "[]");
  }
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
    return this.http.get( this.srvHttp.SERVER_URL + this.srvHttp.urlData, options);    
  }

  public storeData = function (display) {
    this.user = JSON.parse(localStorage.getItem('User'));
    
//    var params = { a: mail };var params = "a="+mail;
    let headers = new Headers();
    headers.append("Accept", 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.set('user', this.user.num);
    let options = new RequestOptions({ headers: headers});
    //var lenData=  localStorage.getItem("localData").length-1;
    var localData=this.listLocalData();
    var params = JSON.stringify(localData);
    var storeData = "n="+params;
     this.http.post(this.srvHttp.SERVER_URL+this.srvHttp.urlData, storeData,options)
     //.toPromise()
     .timeout(10000)
     .map(res => {
            localStorage.setItem("lastData", JSON.stringify(res.json()));
            localStorage.removeItem('localData');
      })
      .subscribe(
        data => { },
        err  => { this.srvHttp.handleError(err); }
      );
     
  }
  public savedData = ( dataT:IData ): any => {
    var d = new Date();
    
    var yr = dataT.dateInj.substring(0,4);
    var mh = dataT.dateInj.substring(5,7);
    var dt = dataT.dateInj.substring(8,10);
    var hr = dataT.timeInj.substring(0,2);
    var mn = dataT.timeInj.substring(3,5);

    if(!dataT.nbHdc) dataT.nbHdc = 0;
    if(!dataT.glycemie) dataT.glycemie = 0;
    if(!dataT.injection) dataT.injection = 0;
    if(!dataT.commentaire) dataT.commentaire = "";
  
    var data = <IData>new Object();
    data.dateInj=yr+"-"+mh+"-"+dt;
    data.timeInj= hr+":"+mn+":00";
    data.nbHdc=dataT.nbHdc; 
    data.repas=dataT.repas;
    data.glycemie=dataT.glycemie; 
    data.injection=dataT.injection;
    data.commentaire=dataT.commentaire;
    data.glycemieAuto=0;
    //data.glycemieCapteur=1;
    
    var storeDataD = this.listLocalData();
    if(!storeDataD || storeDataD.length===0) {
        storeDataD = [];
    }
    
   storeDataD.push(data);
    localStorage.setItem("localData",  JSON.stringify(storeDataD));
    this.storeData(false);
   
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
      .subscribe((data) => {
                this.srvGeneral.setMessage(this.translate.instant("msg.donneesTranferees"));
              },(err) => (console.log("Delay exceeded !")));
  }

}
