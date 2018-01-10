import { ModalController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController } from 'ionic-angular/index';
import { AlertController, ToastController } from 'ionic-angular';
import { Cookie } from 'ng2-cookies/ng2-cookies';

/*
  Generated class for the Famille provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class SrvGeneral {
  loader: any;

  constructor( 
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private translate: TranslateService,
    private loading: LoadingController ) {
    
  }

  public setLoader = ( aff: boolean, text?: string ) : void => {  
    if(aff==true){      
      if(text==null){        
        this.loader = this.loading.create(); 
      }
      else {        
        this.loader = this.loading.create({content:text});         
      }
      this.loader.present();
    }
    else {     
      this.loader.dismiss();
    }    
  }

  public setMessage = ( text?: string, titre?: string, css?:string ): void => {    
    var alert = null;  
    var options = { };

    if(!titre){titre = 'Information';}    
    if(!text){text = 'Information';}   

    if(css){
       options = {
        title: titre,
        subTitle: text,
        buttons: [{
          text: 'OK',
          handler: () => {
              return (localStorage.getItem('access')=='0'?true:true);
          }}],
        cssClass: 'alertDanger',
        mode:'ios',
        enableBackdropDismiss: false
      };
    } 
    else {
        options = {
        title: titre,
        subTitle: text,
        buttons: [{
          text: 'OK',
          handler: () => {
              return (localStorage.getItem('access')=='0'?true:true);
          }}],
        mode:'ios',
        cssClass: 'alertDanger',
        enableBackdropDismiss: false
      };
    }
    
    alert = this.alertCtrl.create(options);
    
    alert.present(); 
    alert.onDidDismiss((data) => {
      
     if (data=true){
       localStorage.setItem('access','1');
     }
});   
  }

  public setMessageInjection = ( title?: string, subTitle?: string ): void => {     
    if(title==null || title.trim().length==0){
      title = 'Information';
    } 
    if(subTitle==null || subTitle.trim().length==0){
      subTitle = '';
    }   
    
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      mode:'ios',
      cssClass: 'alertDanger',
      buttons: ['Ok']
    });
    alert.present();   
  }

  public setMessageConfirm = ( title?: string, message?: string ): any => {    
    if(title==null || title.trim().length==0){
      title = 'Confirmation';
    } 

    if(message==null || message.trim().length==0){
      message = '';
    }  

    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Ok', handler: () => {return(true);}}
      ]
    });

    alert.present();
  }

  public presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  public initTrancheHoraire = ( ): Array<{ value: string, text: string }> => {
    var repas: Array<{ value: string, text: string }> = [];
    var langue = localStorage.getItem("langue");  
    if (langue!=null){
      var u1 = this.translate.instant("msg.petitdejeuner");
      var u2 = this.translate.instant("msg.collation10");
      var u3 = this.translate.instant("msg.midi");
      var u4 = this.translate.instant("msg.collation16");
      var u5 = this.translate.instant("msg.diner");
      var u6 = this.translate.instant("msg.collationSoir");
    }

    repas.push({ value: 'u1', text: u1 });
    repas.push({ value: 'u2', text: u2 });
    repas.push({ value: 'u3', text: u3 });
    repas.push({ value: 'u4', text: u4 });
    repas.push({ value: 'u5', text: u5 });
    repas.push({ value: 'u6', text: u6 });

    return repas;
  }

  public getTrancheHoraire = ( ):string => {    
    var d = new Date();
    var hr = d.getHours();
    var mn = d.getMinutes();    
    var tps = (hr*60)+mn;

    if(tps>1200 ) { return 'u6'; } // 20h00
    else if(tps>1080 ) { return 'u5'; } // 18h00
    else if(tps>970 ) { return 'u4'; } // 14h30
    else if(tps>690 ) { return 'u3'; } // 11h30
    else if(tps>570 ) { return 'u2'; } // 9h30
    else if(tps>390 ) { return 'u1'; }
    else return 'u6'; // entre 0h00 et 6h30    
  }

  public getTextTrancheHoraire = ( trancheHoraire?: string ):string => {       
    var d = new Date();
    var hr = d.getHours();
    var mn = d.getMinutes();    
    var tps = (hr*60)+mn;

    if(trancheHoraire){
      if(trancheHoraire==='u1'){ return this.translate.instant("msg.petitdejeuner"); }
      else if(trancheHoraire==='u2'){ return this.translate.instant("msg.collation10"); }
      else if(trancheHoraire==='u3'){ return this.translate.instant("msg.midi"); }
      else if(trancheHoraire==='u4'){ return this.translate.instant("msg.collation16"); }
      else if(trancheHoraire==='u5'){ return this.translate.instant("msg.diner"); }
      else if(trancheHoraire==='u6'){ return this.translate.instant("msg.collationSoir"); }
    }
    else {
      if(tps>1200 ) { return this.translate.instant("msg.collationSoir"); } // 20h00
      else if(tps>1080 ) { return this.translate.instant("msg.diner"); } // 18h00
      else if(tps>970 ) { return this.translate.instant("msg.collation16"); } // 14h30
      else if(tps>690 ) { return this.translate.instant("msg.midi"); } // 11h30
      else if(tps>570 ) { return this.translate.instant("msg.collation10"); } // 9h30
      else if(tps>390 ) { return this.translate.instant("msg.petitdejeuner"); }
      else return 'u6'; // entre 0h00 et 6h30    
    }
  }

  public stripVowelAccent = ( str ):string => {
    var rExps=[
        {re:/[\xC0-\xC6]/g, ch:'A'},
        {re:/[\xE0-\xE6]/g, ch:'a'},
        {re:/[\xC8-\xCB]/g, ch:'E'},
        {re:/[\xE8-\xEB]/g, ch:'e'},
        {re:/[\xCC-\xCF]/g, ch:'I'},
        {re:/[\xEC-\xEF]/g, ch:'i'},
        {re:/[\xD2-\xD6]/g, ch:'O'},
        {re:/[\xF2-\xF6]/g, ch:'o'},
        {re:/[\xD9-\xDC]/g, ch:'U'},
        {re:/[\xF9-\xFC]/g, ch:'u'},
        {re:/[\xD1]/g, ch:'N'},
        {re:/[\xF1]/g, ch:'n'} 
    ];

    for(var i=0, len=rExps.length; i<len; i++) {
        str=str.replace(rExps[i].re, rExps[i].ch);
    }
    return str;
  };

  public roundNumber = ( number ): number => {
    var newnumber = new Number(number+'').toFixed(1);
    var newnumberFloat =  parseFloat(newnumber);
    newnumber = newnumberFloat.toFixed(2);
    return parseFloat(newnumber);
  };

}
